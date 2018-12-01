import mongoose, { Schema, Query } from '../../bootstrap';


const Comment = new Schema({
  message: String,
  private: { type: Boolean, default: false },
  author: String,
  created: { type: Date, default: Date.now },
});

export default mongoose.model('Session', new Schema({
  title: String,
  topics: [Topic],
  comments: [Comment],
  action_items: [String],
  created: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  closed: Date
}));

export {Query};
