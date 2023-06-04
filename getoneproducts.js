const Product = require('./models/Product')

const getProductsByTitle= async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;

    let products = await Product.find({ title: body.title });
    await res.send(products);
  }
};

module.exports = {getProductsByTitle}
