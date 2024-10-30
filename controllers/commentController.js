const Comment = require('../models/commentModel');

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const result = await comment.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('user'); // Lấy cả thông tin User
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
