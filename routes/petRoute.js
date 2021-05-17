const routerPet = require("express").Router();
const petModel = require("../models/pet");

const {
  PetCreate,
} = require("../controllers/pet.controller");



routerPet.post( "/create",PetCreate);



module.exports = routerPet;
