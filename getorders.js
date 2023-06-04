const Order = require('./models/Order')

const getOrders = async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;

    let orders = await Order.find({ email: body.email });
    await res.send(orders);
  }
};

module.exports = {getOrders}
