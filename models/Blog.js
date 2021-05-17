const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const blogSchema = new Schema ({
idBlog: { type: String, required: true },
image: { type: String, default: "" },
title: { type: String, required: true },
creationDate:{type: Date, required: true},
Author: { type: String, default:"Petoo" },

})


module.exports = Blog = model("product", blogSchema);