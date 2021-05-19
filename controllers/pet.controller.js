const petModel = require("../models/pet");
const ownerModel = require("../models/owner");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");

//register
exports.PetCreate = async (req, res) => {
  // we have ownedPets = [idPets]
  // we have name of pet to create
  try {
    const { pet, ownerID } = req.body;
    const newPet = new petModel(pet);
    const { vaccines, knownAllergies, petPictures } = pet;
    if (!ownerID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }
    const foundOwner = await ownerModel.findOne({ idOwner: ownerID });
    if (!foundOwner) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find Owner" }] });
    }

    if (foundOwner.maxPetNumber === 3) {
      return res.status(404).send({
        errors: [
          { msg: "You already reached the maximum number of owned Pets!" },
        ],
      });
    }
    const { ownedPets } = foundOwner;
    // Getting all names of pets that this SPECIFIC owner is already having
    const foundPetArray = await Promise.all(
      // promise.all besh trod map method async khaterha mel man mahech async
      ownedPets.map(async (el) => {
        const pet = await petModel.findOne({ idPet: el });
        const { name } = pet;
        return name;
      })
    );
    //testing if the name of pet already existing is ownedPets of THAT SPECIFIC owner
    const foundPetOfOwner = foundPetArray.includes(newPet.name);
    // console.log(foundPetOfOwner);
    if (foundPetOfOwner) {
      return res.status(405).send({
        errors: [
          {
            msg: "You already used that name for an existing pet! Please change the name",
          },
        ],
      });
    }
    newPet.idPet = uniqid("Pet-"); //Create specific Id for Pet, not the mongoDB one
    newPet.idOwnerOfPet = ownerID; //Added the idOwner to the pet
    foundOwner.ownedPets.push(newPet.idPet); //adding idPet to ownedPets table of owner
    foundOwner.maxPetNumber++;

    //initale some arrays
    newPet.vaccines.push(vaccines);
    newPet.knownAllergies.push(knownAllergies);
    newPet.petPictures.push(petPictures);

    //Create success notification of pet creation
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You have just added ${newPet.name}!`,
    });
    foundOwner.notificationId.push(newNotification.idNotification);

    //Saving
    await newPet.save();
    await foundOwner.save();
    await newNotification.save();

    // some clg's
    console.log(foundOwner.maxPetNumber);
    console.log(foundPetArray);
    res.status(200).json({
      msg: `Pet created successfully!`,
      newPet,
      newNotification,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Pet!" }] });
  }
};

exports.PetEdit = async (req, res) => {
  try {
    const { idPet } = req.params;
    console.log(req.body);
    let newData = await petModel.findOneAndUpdate(
      { idPet: idPet },
      { $set: { ...req.body } },
      { new: true }
    );
    console.log(newData);
    res.status(200).send({ msg: "Contact edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send("Cant' edit the Data");
  }
};
