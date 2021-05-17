
const petModel = require("../models/pet");
const uniqid = require("uniqid");


//register
exports.PetCreate = async (req, res) => {
  try {
    
    const newPet = new petModel({ ...req.body });
    newPet.idPet = uniqid("Pet-"); //Create specific Id for Owner, not the mongoDB one

    await newPet.save();

    res.status(200).json({ msg: `Account created successfully!`,newPet });
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: "Can not create account!" }] });
  }
};
exports.PetEdit =async(req, res)=>{
  try {
      const {idPet}= req.params
      console.log(req.body)
      let newData= await petModel.findOneAndUpdate({idPet:idPet},{$set:{...req.body}},{new: true})
      console.log(newData)
      res.status(200).send({msg:"Contact edited successfully",newData})
  } catch (error) {
    console.log(error)
      res.status(500).send("Cant' edit the Data")
  }
  }
