import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import { createAdminUser } from "../models/adminUserModel/adminUserModel.js";
import { hassPassword } from "../utils/Bcrypt.js";
import { adminSignUpEmailVerification } from "../utils/email.js";

const router = express.Router();

//creating user
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.verificationCode = uuidv4();
    console.log(req.body.verificationCode);
    req.body.password = hassPassword(req.body.password);
    const result = await createAdminUser(req.body);
    if (result?._id) {
      const uniqueUrl = `http://localhost:3000/verify?c=${result.verificationCode}&email=${result.email}`;

      adminSignUpEmailVerification(result, uniqueUrl);
      res.json({
        status: "success",
        message:
          "We have send the verification url to your email, please click the link to activate your account",
      });
    }

    res.json({
      status: "error",
      message: "Admin User could not created",
    });
  } catch (error) {
    console.log(error);
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "Please enter different email details",
      });
    }
    next(error);
  }
});

export default router;
