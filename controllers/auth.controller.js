const userModel = require("../models/user.model");

module.exports.signup = async (req, res) => {
  console.log(req.body);
  const { pseudo, email, password } = req.body; // destructuring

  try {
    const user = await userModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};
