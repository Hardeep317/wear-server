const User = require('./models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require('dotenv').config()

const userExists = async (email) => {
  let userE = await User.findOne({ email: email });

  if (userE) {
    return userE;
  } else {
    return false;
  }
};

const decap = (plaintext, encryptedText) => {
  const decrypt = bcrypt.compareSync(plaintext, encryptedText);

  return decrypt;
};

const generateToken = (payload) => {
  const resToken = jwt.sign(payload, process.env.SECRET_KEY);

  return resToken;
};

const login = async (req, res) => {
  let user = await userExists(req.body.email);

  if (user) {
    const encryptedText = user.password;
    const isValidPass = decap(req.body.password, encryptedText);

    if (isValidPass) {
      let payload = {
        email: user.email,
        name: user.name,
        _id: user._id,
      };
      const token = generateToken(payload);
      res.status(200).send({
        status: "Successfully logged in",
        error: "",
        message: "Login Successfully",
        data: payload,
        request: "OK",
        token: token,
      });
    } else {
      res.status(400).send({
        status: "Invalid password",
        error: "Password Do Not Match",
        message: "",
        data: null,
        request: "OK",
        token: null,
      });
    }
  } else {
    res.status(404).json({ status: "User does not exist" });
  }
};

module.exports = {login}
