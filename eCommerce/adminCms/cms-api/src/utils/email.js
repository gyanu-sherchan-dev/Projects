import nodemailer from "nodemailer";

const emailProcessing = async (emailInfo) => {
  try {
    //create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const result = await transporter.sendMail(emailInfo);
    console.log("Preview Url: %s", nodemailer.getTestMessageUrl(result));
  } catch (error) {
    console.log(error);
  }
};

// email templete
export const adminSignUpEmailVerification = ({ fName, email }, url) => {
  let info = {
    from: `${email}`, // sender address
    to: process.env.SMTP_USER, // list of receivers
    subject: "New User Verification Email", // Subject line
    text: `Hi ${fName} please follow the ${url}`, // plain text body
    html: `<p>Hi ${fName}</p>
    <br/> 
    <br/> 
    Please follow the link to verify your account
    <a href="${url}" style="color:red" >Verify Email</a>
    `, // html body
  };

  emailProcessing(info);
};
