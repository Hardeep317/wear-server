const Order = require("./models/Order");
const crypto = require("crypto");

const verify = async (req, res) => {
  let body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_payment_id;

  const order = await Order.findOneAndUpdate(
    { orderId: req.body.orderId },
    { status: "Paid" }
  );
  // Order.findByIdAndUpdate(order._id, {status:"Paid"})

  var expectedSignature = crypto
    .createHmac("sha256", "vIZAwfwAJFle4Ty42QGHD5a3kMp995BGV4KSHvr3k1yMh9Oo")
    .update(body.toString())
    .digest("hex");
  var response = { signatureIsValid: "false" };

  if (expectedSignature === req.body.response.razorpay_signature)
    response = { signatureIsValid: "true" };
  res.send({response: response});
};

module.exports = {verify}
