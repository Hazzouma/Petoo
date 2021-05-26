const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const blogSchema = new Schema ({
idBlog: { type: String, required: true },
image: { type: String, default: "" },
title: { type: String, required: true },
content: { type: String, required: true },
creationDate:{type: String, default: Date.now },
author: { type: String, default:"Petoo" },
idAuthor: { type: String, required: true },
})

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;