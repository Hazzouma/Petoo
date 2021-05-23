const routerPet = require("express").Router();

const {
  PetCreate,
  PetEdit,
  allPets,
} = require("../controllers/pet.controller");
const { creationPet, validationPet } = require("../middlewares/validatePet");

//Route of pet creation with some verification on inputs
routerPet.post("/create", creationPet(), validationPet, PetCreate);

routerPet.post("/:idPet", PetEdit);

//get all pets
routerPet.get("/getAllPets", allPets);

module.exports = routerPet;
