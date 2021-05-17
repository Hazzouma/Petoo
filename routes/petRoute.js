const routerPet = require("express").Router();
const petModel = require("../models/pet");

const {
  PetCreate,PetEdit
} = require("../controllers/pet.controller");



routerPet.post( "/create",PetCreate);

routerPet.put('/:idPet', PetEdit )
  


module.exports = routerPet;
