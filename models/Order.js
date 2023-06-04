const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    email:{type:String, required:true},
    orderId:{type:String, required:true},
    products:{type:Object, required:true},
    address:{type:String},
    amount:{type:String, required:true},
    status:{type:String,default:'Pending', required:true}
},{timestamp:true})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;