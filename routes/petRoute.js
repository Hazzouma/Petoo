const routerPet = require("express").Router();

const {
  PetCreate,
  PetEdit,
  allPets,
  getPetsOfOwner,
} = require("../controllers/pet.controller");
const { creationPet, validationPet } = require("../middlewares/validatePet");

//Route of pet creation with some verification on inputs
routerPet.post("/create", creationPet(), validationPet, PetCreate);

//modif a pet
routerPet.post("/modif/:idPet", PetEdit);

//get all pets
routerPet.get("/getAllPets", allPets);

//get pets of that specific owner
// routerPet.post("/getYourPets", getPetsOfOwner);

module.exports = routerPet;
