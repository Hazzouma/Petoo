
const petModel = require("../models/pet");
const uniqid = require("uniqid");


//register
exports.PetCreate = async (req, res) => {
  try {
    
    const newPet = new petModel({ ...req.body });
    newPet.idPet = uniqid("Pet-"); //Create specific Id for Owner, not the mongoDB one

    await newPet.save();

    res.status(200).json({ msg: `Account created successfully!` });
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: "Can not create account!" }] });
  }
};
