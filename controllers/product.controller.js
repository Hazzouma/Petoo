const petModel = require("../models/pet");
const shopModel = require("../models/Shop");
const productModel = require("../models/Product");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");

//register
exports.ProductCreate = async (req, res) => {

  try {
    const { product, shopID } = req.body;
    const newProduct = new productModel(product);
  //Security procedures
    if (!shopID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }
    const foundShop = await shopModel.findOne({ idShop: shopID });
  
    if (!foundShop) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find Shop" }] });
    }

    
    newProduct.idProduct = uniqid("Product-"); //Create specific Id for Product, not the mongoDB one
    newProduct.idShop = shopID; //Added the idShop to the product
    foundShop.productId.push(newProduct.idProduct); //adding idProduct to shop's product table 
    

  
    //Create success notification of product creation
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You have just added ${newProduct.name}!`,
    });

    //adding the notif id to the shop
    foundShop.notificationId.push(newNotification.idNotification);

    //Saving
    await newProduct.save();
    await foundShop.save();
    await newNotification.save();

    
    
    
    res.status(200).json({
      msg: `Product created successfully!`,
      newProduct,
      newNotification,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Product!" }] });
  }
};

exports.ProductEdit = async (req, res) => {
  try {
    const { idProduct } = req.params;
    console.log(req.body);
    let newData = await productModel.findOneAndUpdate(
      { idProduct: idProduct },
      { $set: { ...req.body } },
      { new: true }
    );
    console.log(newData);
    res.status(200).send({ msg: "Product edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Product!" }] });
  }
};
