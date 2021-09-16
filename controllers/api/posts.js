const { Post } = require("../../models");

// @desc Get all the posts with users
// @route GET /api/posts
// @access Private
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: ["user"],
    });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get a post with user
// @route GET /api/posts/:uuid
// @access Private
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { uuid },
      include: ["user"],
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "No post found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add post
// @route POST /api/posts
// @access Private
exports.addPost = async (req, res, next) => {
  try {
    const { body, category } = req.body;
    const userUuid = req.user.id;

    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, category, userId: user.id });

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Delete post
// @route DELETE /api/posts
// @access Private
exports.deletePost = async (req, res, next) => {
  try {
    const uuid = req.user.id;

    const post = await Post.findOne({
      where: { uuid },
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        error: "No post found",
      });
    }

    await post.destroy();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
