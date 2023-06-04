const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://hardeep41016:hardeep317@cluster0.ynvhi0n.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = connectDB;