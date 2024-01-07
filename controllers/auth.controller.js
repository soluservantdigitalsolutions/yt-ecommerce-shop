const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const register = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    const { password, ...info } = newUser._doc;
    res.status(200).json({
      message: "User Created Successfully",
      data: info,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User Creation failed",
      error: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    const comparedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparedPassword) {
      return res.status(404).json({
        message: "Email Or Password is incorrect",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "5d",
      }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({
      data: { ...info, token },
      massage: "login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Login Failed",
      error: error,
    });
  }
};

module.exports = {
  register,
  login,
};
