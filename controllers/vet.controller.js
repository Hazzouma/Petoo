const jwt = require("jsonwebtoken");
const vetModel = require("../models/Vet");
const ownerModel = require("../models/owner");
const uniqid = require("uniqid");

//register
exports.VetRegister = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    const foundOwner = await ownerModel.findOne({ email });
    if (foundOwner)
      return res.status(400).send({ errors: [{ msg: "Email already exist" }] });

    let newVeto = new ownerModel({ ...req.body });
    newVeto.idVet = uniqid("Veto-"); //Create specific Id for Owner, not the mongoDB one

    newVeto.password = passwordHash.generate(newVeto.password); //crypt password
    await newVeto.save();

    res.status(200).json({ msg: `Professional account created successfully!` });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not register Veto!" }] });
  }
};

//login
exports.VetLogin = async (req, res) => {
  var { password, email } = req.body;
  try {
    email = email.toLowerCase();
    let foundVet = await vetModel.findOne({ email });
    if (!foundVet)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const pass = foundVet.password;
    const comparePass = passwordHash.verify(password, pass);
    if (!comparePass)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const token = jwt.sign(
      {
        id: foundVet.idVet,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );

    res.status(200).json({ msg: `Veto logged`, foundVet, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not login!" }] });
  }
};

// // //Send mail to reset password
// exports.ResetPassword = async (req, res, next) => {
//   try {
//     let { email } = req.body;
//     email = email.toLowerCase();
//     console.log(email);
//     let foundUser = await ownerModel.findOne({ email });
//     if (!foundUser)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

// //     //Generate OTP
//     foundUser.OTP = Math.floor(100000 + Math.random() * 900000).toString();
//     // console.log(foundUser.OTP);
//     await foundUser.save();

//     const DOMAIN = "sandbox36c8c1a8f8014eb2862a5882b8d5278c.mailgun.org";
//     const mg = mailgun({
//       apiKey: "16b3dc7dbeb555bb665313c78b49eafe-602cc1bf-f1906692",
//       domain: DOMAIN,
//     });
//     const data = {
//       from: "Petoo <no-reply@petoo.tn>",
//       to: foundUser.email,
//       subject: "Rest password for Petoo Account",
//       text: `Ched your OTP 3leya ${foundUser.OTP}`,
//     };
//     mg.messages().send(data, function (error, body) {
//       console.log(body);
//     });
//     res
//       .status(200)
//       .send({ msg: "Email sent Successfully! Check your email box.", email });
//   } catch (error) {
//     res.status(500).send({ errors: [{ msg: "Can not send email!" }] });
//   }
// };

// //validateOTP CODE
// exports.validateOTP = async (req, res) => {
//   try {
//     let { email, otp, password } = req.body;
//     email = email.toLowerCase();
//     let foundUser = await ownerModel.findOne({ email });

//     if (!foundUser)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

//     if (foundUser.OTP !== otp.toString())
//       return res.status(403).send({ error: [{ msg: "OTP does not match!" }] });

//     hashedPass = passwordHash.generate(password);
//     foundUser.password = hashedPass;

//     foundUser.OTP = null;
//     await foundUser.save();
//     res.status(200).send({ msg: "Password successfully changed!" });
//   } catch (error) {
//     res.status(500).send({ errors: [{ msg: "Can not reset password" }] });
//   }
// };
