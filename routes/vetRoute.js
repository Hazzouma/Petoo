const routerVet = require("express").Router();
const vetModel = require("../models/Vet");
const ownerModel = require("../models/owner");


const {
  VetRegister,
  VetLogin,
  ResetPassword,
  validateOTP,
} = require("../controllers/vet.controller");
const { loginValidate, validation, registerValidate, validReset, } = require("../middlewares/validateOwner");



const { isAuth, tokenValid } = require("../middlewares/validations");




routerVet.post( "/register",registerValidate(), validation, VetRegister);








module.exports = routerVet;
