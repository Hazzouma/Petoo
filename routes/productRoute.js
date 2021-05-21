const routerProduct = require("express").Router();

const { ProductCreate, ProductEdit } = require("../controllers/product.controller");
const { creationProduct, validationProduct } = require("../middlewares/validateProduct");

//Route of product creation with some verification on inputs
routerProduct.post("/create", creationProduct(), validationProduct, ProductCreate);

routerProduct.post("/:idProduct", ProductEdit);

module.exports = routerProduct;
