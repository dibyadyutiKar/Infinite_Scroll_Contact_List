const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  const { userName, password } = req.body;

  const token = jwt.sign({ userName, password }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};
