const routerPet = require("express").Router();

const { PetCreate, PetEdit } = require("../controllers/pet.controller");
const { creationPet, validationPet } = require("../middlewares/validatePet");

//Route of pet creation with some verification on inputs
routerPet.post("/create", creationPet(), validationPet, PetCreate);

routerPet.post("/:idPet", PetEdit);

module.exports = routerPet;
