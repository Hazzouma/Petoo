const notifOwner = require("express").Router();
const { markReadNotif, getNotif } = require("../controllers/notif.controller");

//mark read
notifOwner.post("/isRead", markReadNotif);

//get All notif for the connected user
notifOwner.post("/getnotif", getNotif);

//export
module.exports = notifOwner;
