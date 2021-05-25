const routerAppointment = require("express").Router();

const {
  AppointmentCreateByOwner,
  AppointmentCreateByVet,
  AppointmenttEditbyVet,
  AppointmenttEditbyOwner,
  AppointmentAcceptbyOwner,
  AppointmentAcceptbyVet,
} = require("../controllers/appointment.controller");
const {
  creationAppointment,
  validationAppointment,
} = require("../middlewares/validateAppointment");

//Route of Appointment creation with some verification on inputs
routerAppointment.post(
  "/createByOwner",
  creationAppointment(),
  validationAppointment,
  AppointmentCreateByOwner
);

routerAppointment.post(
  "/createByVet",
  creationAppointment(),
  validationAppointment,
  AppointmentCreateByVet
);

//Edit
routerAppointment.post("/editByVet", AppointmenttEditbyVet);
routerAppointment.post("/editByOwner", AppointmenttEditbyOwner);

//Accept
routerAppointment.post("/AcceptbyOwner", AppointmentAcceptbyOwner);
routerAppointment.post("/AcceptbyVet", AppointmentAcceptbyVet);

module.exports = routerAppointment;
