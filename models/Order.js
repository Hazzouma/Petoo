const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const orderSchema = new Schema ({
idOrder: { type: String, required: true },
idProduct: { type: String, required: true },
idShop: { type: String, required: true },
idOwner: { type: String, required: true },
quantity: { type: Number, required: true },
status: { type: String, default: "Pending" },

})




const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
