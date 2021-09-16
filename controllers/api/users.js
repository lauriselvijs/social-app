const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register new user
// @route POST /api/users
// @access Public
exports.registerNewUser = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  // Validation
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({
      msg: "Please enter all fields",
    });
  }

  // Check for existing user
  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "User already exists, please provide unique email",
      });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              uuid: user.uuid,
            },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user,
              });
            }
          );
        });
      });
    });
  });
};

// @desc Get user data
// @route GET /api/users
// @access Private
exports.getUserData = async (req, res, next) => {
  const uuid = req.user.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
