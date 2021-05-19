
const petModel = require("../models/pet");
const ownerModel = require("../models/owner");
const uniqid = require("uniqid");


//register
exports.PetCreate = async (req, res) => {
  try {
    const  {pet, ownerID}= req.body
    const newPet = new petModel(pet);

    if (!ownerID){
      return res.status(404).send({ errors: [{ msg: "Error, try again later" }] });
    }
    const foundOwner= await findOne({idOwner: ownerID});
    if (!foundOwner){
      return res.status(404).send({ errors: [{ msg: "Error, Cannot find Onwer" }] });
    }

    newPet.idPet = uniqid("Pet-"); //Create specific Id for Owner, not the mongoDB one
    await newPet.save();

    res.status(200).json({ msg: `Pet created successfully!`,newPet });
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: "Can not create Pet!" }] });
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
