const express = require("express");
const router = express.Router();
const { authUser, getUserData } = require("../../controllers/api/auth");

const { auth } = require("../../middleware/api/auth");

router.route("/").post(authUser);

module.exports = router;
