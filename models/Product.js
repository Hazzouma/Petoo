const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const productSchema = new Schema ({
idProduct: { type: String, required: true },
idShop: { type: String, required: true },
name:{type: String, required: true},
color:{type: String, default:""},
description:{type: String, default:""},
price:{type: Number, required: true},
brand:{type: String, default:""},
promoPrice:{type: Number, default: promo},
productType:{type: string, default: ""}, //Food, accessoire, jeu.....

})


module.exports = Product = model("product", productSchema);