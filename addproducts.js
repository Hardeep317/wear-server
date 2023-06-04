const productModel = require('./models/Product')

const addproducts = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new productModel({
        title: req.body[i].title,
        slug: req.body[i].slug,
        img: req.body[i].img,
        desc: req.body[i].desc,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await p.save();
    }
    res.status(200).json({ success: "Items added successfully" });
  } else {
    res.status(400).json({ error: "Method not implemented" });
  }
};

module.exports = {addproducts}
