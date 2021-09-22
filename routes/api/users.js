const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  getUserData,
  editUserInfo,
  deleteUser,
} = require("../../controllers/api/users");
const { auth } = require("../../middleware/api/auth");

router.route("/").post(registerNewUser);
router
  .route("/")
  .all(auth)
  .get(getUserData)
  .patch(editUserInfo)
  .delete(deleteUser);
router.route("/user").all(auth).get(getUserData);

module.exports = router;
