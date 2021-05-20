const routerVet = require("express").Router();



const {
  VetRegister,
} = require("../controllers/vet.controller");
const { validation, registerValidate,  } = require("../middlewares/validateVet");




routerVet.put( "/register",registerValidate(), validation, VetRegister);








module.exports = routerVet;
