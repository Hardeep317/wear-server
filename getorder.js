const Order = require('./models/Order')

const getOrder = async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;

    let order = await Order.findOne({ _id: body.id });
    await res.send(order);
  }
};

module.exports = {getOrder}
