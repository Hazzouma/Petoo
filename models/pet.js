const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//pet Schema
const petSchema = new Schema({
  idPet: { type: String, required: true }, //required ID
  idOwnerForPet: { type: String, required: true }, //required Id of the Owner of the pet
  pseudo: { type: String, required: true }, // required Pseudo
  petType: { Type: String, required: true }, //required type of Pet
  race: { type: String, default: "animal" },
  age: { type: Date, default: Date.now },
  petPictures: [String],
  petProfilePicture: { type: String, default: "" },
  isVaccined: { type: Boolean, default: false },
  isDead: { type: Boolean, default: false },
  isOwned: { type: Boolean, default: true },
});

//pet model
const petModel = mongoose.model("Pet", petSchema);
module.exports = petModel;
