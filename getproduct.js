const productModel = require('./models/Product')

const getProduct = async (req, res) => {
  let body = req.body.slug;
  let product = await productModel.findOne({ slug: body });
  res.status(200).json({ product });
};

module.exports = {getProduct}
