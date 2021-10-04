const express = require("express");
const router = express.Router();
const { authUser } = require("../../controllers/api/auth");

router.route("/").post(authUser);

module.exports = router;
