const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const notificationSchema = new Schema ({
idNotification: { type: String, required: true },
msg:{type: String, required: true},
creationDate:{type: Date, required: true},
isRead:{type:boolean, default:false},
})


module.exports = Notification = model("notification", notificationSchema);