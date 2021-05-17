const routerVet = require("express").Router();
const vetModel = require("../models/Vet");

const {
  VetRegister,
  VetLogin,
  ResetPassword,
  validateOTP,
} = require("../controllers/vet.controller");
const { loginValidate, validation, registerValidate, validReset, } = require("../middlewares/validateOwner");


// const {
//   validation,
//   registerValidate,
//   loginValidate,
// 
// } = require("../middlewares/validateOwner");
const { isAuth, tokenValid } = require("../middlewares/validations");




routerVet.post( "/register",registerValidate(), validation, VetRegister);
routerVet.post( "/login",loginValidate(), validation, VetLogin);







//Utilisateur authentifié
routerVet.get("/dashboard/default/current", isAuth, (req, res) => {
  res.send({ msg: "Welcome", userLogged: req.userLogged });
});

//utilisateur a oublié son password
routerVet.post("/forgetPwd/otp", ResetPassword);

//user after receiving mail to reset password
routerVet.post("/forgetPwd", validReset(), validation, validateOTP);

//Get all Owners
routerVet.get("/getAllOwners", async (request, response, next) => {
  try {
    const allVets = await vetModel.find();
    response.status(200).json({ msg: "All Vets", allVets });
  } catch (error) {
    console.log(error);
  }
  next();
});
// Find Owner by idOwner && Send Full info
routerVet.get("/find/:idVet", async (req, res, next) => {
  const { idVet } = req.params;
  console.log(idVet);
  try {
    const vetFoundById = await vetModel.find({ idVet });
    res.status(200).json({ msg: `Vet found`, vetFoundById });
  } catch (error) {
    console.log(error);
  }
  next();
});

// Modify Owner by idOwner
routerVet.post("/modify/:idVet", async (req, res, next) => {
  const { idVet } = req.params;
  let vetFoundById = vetModel.find({ idVet });
  let {
    nom,
    prenom,
    email,
    phoneNumber,
    dateNaissance,
    adresse,
    ville,
    codePostale,
  } = req.body;

  console.log(idVet);
  try {
    if (req.body.password) {
      //if pass has ben changed
      password = passwordHash.generate(req.body.password); //crypt
      vetFoundById = await vetModel.findOneAndUpdate(
        { idVet },
        {
          $set: { ...req.body, password },
        }
      );
    } else {
      //if NOT
      vetFoundById = await ownerModel.findOneAndUpdate(
        { idOwner },
        {
          $set: { ...req.body },
        }
      );
    }
    res.status(200).json({ msg: `Vet modified`, vetFoundById });
  } catch (error) {
    console.log(error);
  }
  next();
});

module.exports = routerVet;
