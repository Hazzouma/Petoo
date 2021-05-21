const notification = require("../models/Notification");
const ownerModel = require("../models/owner");

//mark Read notif
exports.markReadNotif = async (req, res) => {
  const { idUser, idNotif } = req.body;
  try {
    const foundNotifOwner = await ownerModel.findOne({ idUser });

    if (!foundNotifOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (!idNotif)
      //check notif exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    const foundNotifInOwner = foundNotifOwner.notificationId.includes(idNotif);
    if (!foundNotifInOwner)
      //check if notif exists in owner notif table
      return res
        .status(400)
        .send({ errors: [{ msg: "This notification doesn't exist" }] });

    const foundNotif = await notification.findOne({ idNotification: idNotif });
    if (!foundNotif)
      return res
        .status(400)
        .send({ errors: [{ msg: "No such Notification" }] });

    if (!foundNotif.isRead) foundNotif.isRead = true;
    else
      return res
        .status(400)
        .send({ msg: "This notification is already read!", read: true });

    await foundNotif.save();

    res
      .status(200)
      .send({ msg: `This notif is read`, isReadAt: Date.now().toString() });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not read notification!" }] });
  }
};

//getting all notifs for the current user
exports.getNotif = async (req, res) => {
  try {
    const { idUser } = req.body;
    const foundOwner = await ownerModel.findOne({ idUser });

    if (!foundOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    const arrayOfNotifications = await Promise.all(
      foundOwner.notificationId.map(
        async (notif) => await notification.findOne({ idNotification: notif })
      )
    );
    console.log(arrayOfNotifications);
    res.status(200).send(arrayOfNotifications); //payload is table of objects of notifs
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get notifs!" }] });
  }
};
