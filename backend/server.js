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

app.use("/static", express.static("public"));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/get-cv", (req, res) => {
  const pdfFile = __dirname + "/files/danousis_CV.pdf";
  console.log(pdfFile);
  if (!fs.existsSync(pdfFile)) {
    res.send("File is removed!");
  } else {
    res.download(pdfFile);
  }
});

app.post(
  "/send-email",
  [
    check("name", "Full name is required")
      .isLength({
        min: 3,
        max: 30,
      })
      .trim()
      .escape(),
    check("email", "Invalid Email").isEmail(),
    check("message", "Invalid message")
      .isString()
      .isLength({
        min: 3,
        max: 300,
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log("Listening on port " + PORT)
);
