const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const appointmentSchema = new Schema ({
idAppointment: { type: String, required: true },
date:{type: String, default: Date.now},
confirmedByOwner:{type:boolean, default:false },
confirmedByVet:{type:boolean, default:false},
isDone:{type:boolean, default:false},
petId:{type:String , default:""},
vetId:{type:String, default:""},
ownerId:{type:String, default:""},
}
module.exports = Appointment = model("appointment", appointmentSchema);