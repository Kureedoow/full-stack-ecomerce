const nodemailer = require("nodemailer");
const emailVerification=async(email)=>{

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rapidmaan1@gmail.com",
    pass: "jjctnknxhixppllp",
  },
});


 const info = await transporter.sendMail({
    from: 'rapidmaan1@gmail.com',
    to:email,
    subject: "Wellcome👋👋👋 ✔",
    text: "Hello world?", // plain‑text body
    html: `const nodemailer = require("nodemailer");
const emailVerification=async(email)=>{

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rapidmaan1@gmail.com",
    pass: "jjctnknxhixppllp",
  },
});


 const info = await transporter.sendMail({
    from: 'rapidmaan1@gmail.com',
    to:email,
    subject: "Wellcome👋👋👋 ✔",
    text: "Hello world?", // plain‑text body
    html: "<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Verification system</title></head><body style="margin:0;padding:0;background-color:#f6f6f6;font-family:Arial,sans-serif"><div style="width:300px;height:350px;margin:100px auto;background:#fff;border:1px solid #ddd;border-radius:8px;padding:20px"><h2 style="text-align:center;font-size:25px;margin:10px 25px 0;color:#00f">E-Learning Management System</h2><div style="text-align:center;margin:10px 0;font-size:16px;font-weight:700;color:#444">abdirahmanstar38@gmail.com</div><div style="font-size:15px;color:#333;line-height:1.6;text-align:center;margin:20px 0">We welcome you to our platform to be one of our learners. If this is you, please continue to verify your Gmail and secure your privacy!</div><div style="text-align:center;margin-top:15px"><a href="#" style="display:inline-block;background:#1a73e8;color:#fff;text-decoration:none;padding:12px 24px;border-radius:24px;font-weight:700;font-size:15px">Verified Account</a></div><div style="text-align:center;font-size:13px;color:#555;margin-top:20px">You can also see security activity at<br><a href="https://myaccount.google.com/notifications" style="color:#1a73e8;text-decoration:none">https://myaccount.google.com/notifications</a></div></div></body></html>", // HTML body
  });
}
module.exports = emailVerification`, // HTML body
  });
}
module.exports = emailVerification