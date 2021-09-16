const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Auth user
// @route POST /api/auth
// @access Public
exports.authUser = (req, res, next) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      msg: "Please enter all fields",
    });
  }

  // Check for existing user
  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      return res.status(400).json({
        msg: "User does not exists",
      });
    }

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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
};
