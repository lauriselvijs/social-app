const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
} = require("../../controllers/api/posts");

const { auth } = require("../../middleware/api/auth");

//router.route("/").get(getPosts);

// every request POST, GET DELETE, ... after all() be
// affected by middleware auth for same path ("/")
router.route("/").all(auth).post(addPost).get(getPosts).patch(editPost);
router.route("/:uuid").all(auth).get(getPost).delete(deletePost);

module.exports = router;
