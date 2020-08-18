const nodemailer = require("nodemailer");

const mailSend = (req, res, next) => {
  const { name, email, message } = req.body;
  const transport = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: process.env.STMP_EMAIL,
      pass: process.env.STMP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.STMP_EMAIL,
    subject: "You have an email from Danousis Website",
    text: message,
  };
  transport
    .sendMail(mailOptions)
    .then(() => {
      res
        .status(200)
        .json({ msg: "Your message was sent! Thanks!" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json({
        msg:
          "Sorry! Your message was not sent.. Please try again :(",
      });
    });
};

module.exports = mailSend;
