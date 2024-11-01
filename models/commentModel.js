const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }  // Tham chiếu đến User
});

module.exports = mongoose.model('Comment', commentSchema);
