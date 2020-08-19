const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const mailSend = require("./sendMail");
const {
  check,
  validationResult,
} = require("express-validator");
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/cv", (req, res) => {
  const pdfFile = "/files/danousis_CV.pdf";
  fs.exists(pdfFile, (err) => {
    if (err) {
      res.send("File is removed!");
    } else {
      res.download(__dirname + pdfFile);
    }
  });
});

app.post(
  "/api/send-email",
  [
    check("name", "Full name is required")
      .isLength({
        min: 3,
        max: 60,
      })
      .trim()
      .escape(),
    check("email", "Invalid Email").isEmail(),
    check("message", "Invalid message")
      .isString()
      .isLength({
        min: 3,
        max: 1000,
      })
      .trim()
      .escape(),
  ],

  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errorText = errors
        .array()
        .map((err) => err.msg + " | ");
      return res.status(400).json({
        msg: errorText,
      });
    } else {
      mailSend(req, res);
    }
  }
);

const PORT = 5000;

app.listen(PORT, () =>
  console.log("Listening on port " + PORT)
);
