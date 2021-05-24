const appointmentModel = require("../models/Appointment");
const ownerModel = require("../models/owner");
const petModel = require("../models/pet");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");

//app creation by Owner
exports.AppointmentCreateByOwner = async (req, res) => {

  try {
    const { vetID, petID, ownerID, appointment} = req.body;

    const newAppointment = new appointmentModel( appointment);
    newAppointment.idAppointment = uniqid("App-"); //Create specific Id for Appointment, not the mongoDB one

  //Security procedures
  //Checking if There are IDS
    if (!vetID || !ownerID || !petID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }

   //checking if the IDS given exist in our data base
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });
    if (!foundVet || !foundOwner || !foundPet) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find profiles" }] });
    }
    
    newAppointment.idVet = vetID; //Added the idVet to the Appointment
    newAppointment.idPet = petID; //Added the idPet to the Appointment
    newAppointment.idOwner = ownerID; //Added the idPOwner to the Appointment
    newAppointment.confirmedByOwner= true;// since it's created by the owner it's confirmed by him 

    foundVet.appointmentId.push(newAppointment.idAppointment); //adding idApp to Vet's product table 
    foundOwner.appointmentId.push(newAppointment.idAppointment); //adding idApp to owners's product table 
    
    //Create success notification of appointment creation for the OWNER
    const newOwnerNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `you have booked an appointment for ${foundPet.name} with ${foundVet.prenom} on ${newAppointment.date}, wait the confimation!`,
    });
    //adding the notif id to the OWNER
    foundOwner.notificationId.push(newOwnerNotification.idNotification);

     //Create a  notification  for the VET
      const newVetNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `An appointment has been booked with you for ${foundOwner.prenom} and his pet ${foundPet.name} on ${newAppointment.date}!`,
    });
    //adding the notif id to the VET
    foundVet.notificationId.push(newVetNotification.idNotification);

    //Saving
    await newAppointment.save();
    await foundVet.save();
    await foundPet.save();
    await foundOwner.save();
    await newOwnerNotification.save();
    await newVetNotification.save();
    
    res.status(200).json({
      msg: `Appointment created successfully!`,
      newAppointment,
      newOwnerNotification,
      newVetNotification
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Appointment" }] });
  }
};



//app creation by Vet
exports.AppointmentCreateByVet = async (req, res) => {

  try {
    const { vetID, petID, ownerID, appointment} = req.body;

    const newAppointment = new appointmentModel( appointment);
    newAppointment.idAppointment = uniqid("App-"); //Create specific Id for Appointment, not the mongoDB one

  //Security procedures
  //Checking if There are IDS
    if (!vetID || !ownerID || !petID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }

   //checking if the IDS given exist in our data base
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });
    if (!foundVet || !foundOwner || !foundPet) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find profiles" }] });
    }
    
    newAppointment.idVet = vetID; //Added the idVet to the Appointment
    newAppointment.idPet = petID; //Added the idPet to the Appointment
    newAppointment.idOwner = ownerID; //Added the idPOwner to the Appointment
    newAppointment.confirmedByVet= true;// since it's created by the owner it's confirmed by him 

    foundVet.appointmentId.push(newAppointment.idAppointment); //adding idApp to Vet's product table 
    foundOwner.appointmentId.push(newAppointment.idAppointment); //adding idApp to owners's product table 
    
    //Create success notification of appointment creation for the Vet
    const newVetNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `you have booked an appointment with ${foundOwner.prenom} and his pet ${foundPet.name} on ${newAppointment.date}, wait the confimation!`,
    });
    //adding the notif id to the Vet
    foundVet.notificationId.push(newVetNotification.idNotification);

     //Create a  notification  for the OWNER
      const newOwnerNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `An appointment has been booked with you for and ${foundPet.name} with ${foundVet.prenom} ${foundVet.nom} on ${newAppointment.date}! , please confirm.`,
    });
    //adding the notif id to the Owner
    foundOwner.notificationId.push(newOwnerNotification.idNotification);

    //Saving
    await newAppointment.save();
    await foundVet.save();
    await foundPet.save();
    await foundOwner.save();
    await newOwnerNotification.save();
    await newVetNotification.save();
    
    res.status(200).json({
      msg: `Appointment created successfully!`,
      newAppointment,
      newOwnerNotification,
      newVetNotification
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Appointment" }] });
  }
};



 // Not Sure about the following ,so if Correct ,we'll then create edit by owner
exports.AppointmenttEditbyVet = async (req, res) => {
  try {
    const { vetID , ownerID, appointmentID} = req.body ;
    
    //check the the Accounts (vet and owner)
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundAppointment = await appointmentModel.findOne({ idAppointment: appointmentID });
if (!foundVet || !foundOwner ){
  return res
  .status(404)
  .send({ errors: [{ msg: "Error, can't find accounts" }] });
}


const { appointmentId } = foundVet;
/// Getting all appointments that this SPECIFIC vet has
const foundAppinArray = await Promise.all(
  appointmentId.map(async (el) => {
    const app = await appointmentModel.findOne({ idAppointment: el });
    const { idAppointment } = app;
    return idAppointment;
  })
);
//testing if the app id already existing in the appointment Array of THAT SPECIFIC vet
const foundAppOfVet = foundAppinArray.includes(foundAppointment.idAppointment);
//if it doesnt, he can't edit it 
if (!foundAppOfVet) {
  return res.status(405).send({
    errors: [
      {
        msg: "You cannot edit this appointment",
      },
    ],
  });
}

    let newData = await productModel.findOneAndUpdate(
      { idProduct: idProduct },
      { $set: { ...req.body } },
      { new: true }
    );
    console.log(newData);
    res.status(200).send({ msg: "Appointment edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Appointment!" }] });
  }
};



// app accept by Owner
exports.AppointmentAcceptbyOwner = async (eq, res) =>  {
  try {
    const { vetID , ownerID, petID, appointmentID} = req.body ;
  //updating the appointment details
  const foundApp= await appointmentModel.findOneAndUpdate({ idAppointment: appointmentID }, {$set:{...confirmedByOwner= true, }});
  const foundVet = await ownerModel.findOne({ idUser: vetID });
  const foundOwner = await ownerModel.findOne({ idUser: ownerID });
  const foundPet = await petModel.findOne({ idUser: petID });

  //Create a  notification  for the VET
  const newNotification = new Notification({
    idNotification: uniqid("Notif-"),
    msg: `The Appointment with  ${foundOwner.prenom} and his pet ${foundPet.name} on ${foundApp.date} has been accepted!`,
  });

  //adding the notif id to the VET
  foundVet.notificationId.push(newNotification.idNotification);

  //Saving
  await foundVet.save();
  await foundOwner.save();
  await newNotification.save();

  res.status(200).json({
    msg: `Appointment accpted!`,
    foundApp,
    newNotification
  });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not accept Appointment!" }] });
  }
}



// app accept by Vet
exports.AppointmentAcceptbyVet = async (eq, res) =>  {
  try {
    const { vetID , ownerID, petID, appointmentID} = req.body ;
  //updating the appointment details
  const foundApp= await appointmentModel.findOneAndUpdate({ idAppointment: appointmentID }, {$set:{...confirmedByVet= true, }});
  const foundVet = await ownerModel.findOne({ idUser: vetID });
  const foundOwner = await ownerModel.findOne({ idUser: ownerID });
  const foundPet = await petModel.findOne({ idUser: petID });

  //Create a  notification  for the OWNER
  const newNotification = new Notification({
    idNotification: uniqid("Notif-"),
    msg: `The Appointment with  ${foundVet.prenom} for ${foundPet.name} on ${foundApp.date} has been accepted!`,
  });

  //adding the notif id to the OWNER
  foundOwner.notificationId.push(newNotification.idNotification);

  //Saving
  await foundVet.save();
  await foundOwner.save();
  await newNotification.save();

  res.status(200).json({
    msg: `Appointment accpted!`,
    foundApp,
    newNotification
  });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not accept Appointment!" }] });
  }

}