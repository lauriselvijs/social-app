const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
} = require("../../controllers/api/posts");

const { auth } = require("../../middleware/api/auth");

//router.route("/").get(getPosts);

// every request POST, GET DELETE, ... after all() be
// affected by middleware auth for same path ("/")
router.route("/").all(auth).post(addPost).get(getPosts).delete(deletePost);
router.route("/:id").all(auth).get(getPost);

module.exports = router;
