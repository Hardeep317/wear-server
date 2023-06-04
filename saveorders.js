const Order = require('./models/Order')

const saveOrder = async (req, res) => {
  if (req.method === "POST") {
    let order = new Order({
      email: req.body.email,
      orderId: req.body.orderId,
      products: req.body.products,
      address: req.body.address,
      amount: req.body.amount,
      status: req.body.status,
    });

    await order.save();

    res.status(200).json({ message: "Success" });
  }
};

module.exports = {saveOrder}
