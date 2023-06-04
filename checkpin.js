require('dotenv').config()
const checkPin = async (req, res) => {
  res.status(200).json({
    124001: ["Rohtak", "Haryana"],
    131302: ["Gohana", "Haryana"],
    110001: ["New Delhi", "Delhi"],
    530068: ["Bengaluru", "Karnataka"],
    110038: ["South West Delhi", "Delhi"],
    101213: ["Vadodara", "Gujarat"],
  });
};

module.exports = {checkPin}
