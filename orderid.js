const Order = require('./models/Order')
const Razorpay = require("razorpay");

const getOID = async (req, res) => {
  if (req.method === "POST") {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    var options = {
      amount: +(req.body.amount) * 100, // amount in the smallest currency unit
      currency: "INR",
    };

    try {
      const ordersf = await instance.orders.create(options);

      res.status(200).json({
        status: "success",
        orderId: ordersf.id,
      });
    } catch (error) {
      console.log({ error: error });
      res.status(400).json({
        status: "error",
        data: null,
        error: error,
      });
    }
  } else {
    res.status(500).json({ error: "Bad Request" });
  }
};

module.exports = {getOID}
