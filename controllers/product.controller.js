const Product = require("../models/product.model.js");

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json({
      message: "Product created Successfully",
      newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An Error Occurred while Creatng the Product",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
};
