const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
  getPostsWithCurPag,
} = require("../../controllers/api/posts");

const { auth } = require("../../middleware/api/auth");

// every request POST, GET DELETE, ... after all() be
// affected by middleware auth for same path ("/")
router.route("/").all(auth).post(addPost).get(getPosts).patch(editPost);
router.route("/:uuid").all(auth).get(getPost).delete(deletePost);

//router.route("/").get(getPostsWithCurPag);

module.exports = router;
