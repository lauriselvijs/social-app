const express = require("express");
const router = express.Router();
const {
  getPost,
  addPost,
  editPost,
  deletePost,
  getPostsWithCurPag,
} = require("../../controllers/api/posts");

const { auth } = require("../../middleware/api/auth");

// every request POST, GET DELETE, ... after all() be
// affected by middleware auth for same path ("/")
router.route("/").all(auth).post(addPost).patch(editPost);
router.route("/:uuid").all(auth).get(getPost).delete(deletePost);
router.route("/all").all(auth).post(getPostsWithCurPag);

module.exports = router;
