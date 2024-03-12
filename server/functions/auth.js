const authSchema = require("../database/authSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await authSchema.findOne({ email });

    if (user) {
      return res.status(500).json({ message: "user is already registered" });
    }

    if (password.lenght < 8) {
      return res.status(500).json({ message: "enter a longer password" });
    }

    if (!validateEmail(email)) {
      return res.status(500).json({ message: "please enter your email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authSchema.create({
      username,
      email,
      password: hashedPassword,
    });

    const { SECRET_KEY } = process.env;

    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token, status: "OK", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "There is no such user" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      res.status(500).json({ message: "şifre yanliş" });
    }

    const { SECRET_KEY } = process.env;

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ token, user, status: "OK" });
  } catch (error) {
    res.status(500).json({ message: error.status });
  }
};

const validateEmail = (email) => {
  return validator.isEmail(email);
};

module.exports = { register, login };
