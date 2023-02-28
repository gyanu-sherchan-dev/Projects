import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/admin-cms";

export const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(dbUrl);
    conn && console.log("Mongo db connected");
  } catch (error) {
    console.log(error.message + "from mongodb");
  }
};
