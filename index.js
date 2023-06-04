const mongoose = require("mongoose");
require('dotenv').config()
const bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors');
const connectDB = require("./middleware/mongoose");
const { addproducts } = require("./addproducts");
const { checkPin } = require("./checkpin");
const { getOrders } = require("./getorders");
const { getProduct } = require("./getproduct");
const { getTshirts } = require("./gettshirts");
const { getJeans } = require("./getjeans");
const { getHoodies } = require("./gethoodies");
const {login} = require('./login');
const { getOID } = require("./orderid");
const { saveOrder } = require("./saveorders");
const { signUp } = require("./signup");
const { updateProducts } = require("./updateproducts");
const { verify } = require("./verify");
const { getProductsByTitle } = require("./getoneproducts");
const { getOrder } = require("./getorder");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Hardeep Siwach")
})

app.get('/checkpin', checkPin)

app.get('/gettshirts', getTshirts)

app.get('/getjeans', getJeans)

app.get('/gethoodies', getHoodies)

app.post('/addproducts', addproducts);

app.post('/getorders', getOrders)

app.post('/getproduct', getProduct)

app.post('/login', login)

app.post('getorderId', getOID)

app.post('/saveorder', saveOrder)

app.post('/signup', signUp)

app.post('/getorder', getOrder)

app.post('/updateproducts', updateProducts)

app.post('/verify', verify)

app.post('/getbytitle', getProductsByTitle)


connectDB()
    app.listen(5500, () => console.log('Server Connected'))