const routerOwner = require("express").Router();
const ownerModel = require("../models/owner");

const {
  Register,
  Login,
  ResetPassword,
  validateOTP,
} = require("../controllers/owner.controller");
const {
  validation,
  registerValidate,
  loginValidate,
  validReset,
} = require("../middlewares/validateOwner");
const { isAuth, tokenValid } = require("../middlewares/validations");

//Create new Owner
routerOwner.post("/register", registerValidate(), validation, Register);

//Login
routerOwner.post("/login", loginValidate(), validation, Login);

//Utilisateur authentifié
routerOwner.get("/dashboard/default/current", isAuth, (req, res) => {
  res.send({ msg: "Welcome", userLogged: req.userLogged });
});

//utilisateur a oublié son password
routerOwner.post("/forgetPwd/otp", ResetPassword);

//user after receiving mail to reset password
routerOwner.post("/forgetPwd", validReset(), validation, validateOTP);

// //Get all Owners
// routerOwner.get("/getAllOwners", async (request, response, next) => {
//   try {
//     const allOwners = await ownerModel.find();
//     response.status(200).json({ msg: "All Owners", allOwners });
//   } catch (error) {
//     console.log(error);
//   }
//   next();
// });
// // Find Owner by idOwner && Send Full info
// routerOwner.get("/find/:idOwner", async (req, res, next) => {
//   const { idOwner } = req.params;
//   console.log(idOwner);
//   try {
//     const ownerFoundById = await ownerModel.find({ idOwner });
//     res.status(200).json({ msg: `Owner found`, ownerFoundById });
//   } catch (error) {
//     console.log(error);
//   }
//   next();
// });

// // Modify Owner by idOwner
// routerOwner.post("/modify/:idOwner", async (req, res, next) => {
//   const { idOwner } = req.params;
//   let ownerFoundById = ownerModel.find({ idOwner });
//   let {
//     nom,
//     prenom,
//     email,
//     phoneNumber,
//     dateNaissance,
//     adresse,
//     ville,
//     codePostale,
//   } = req.body;

//   console.log(idOwner);
//   try {
//     if (req.body.password) {
//       //if pass has ben changed
//       password = passwordHash.generate(req.body.password); //crypt
//       ownerFoundById = await ownerModel.findOneAndUpdate(
//         { idOwner },
//         {
//           $set: { ...req.body, password },
//         }
//       );
//     } else {
//       //if NOT
//       ownerFoundById = await ownerModel.findOneAndUpdate(
//         { idOwner },
//         {
//           $set: { ...req.body },
//         }
//       );
//     }
//     res.status(200).json({ msg: `Owner modified`, ownerFoundById });
//   } catch (error) {
//     console.log(error);
//   }
//   next();
// });

module.exports = routerOwner;
