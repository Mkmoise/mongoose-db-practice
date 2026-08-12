const mongoose = requre("mongoose");
const postSchema = new mongoose.Schema(

  {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  published: {
    type: boolean,
    default: false,
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model( "Post", postSchema);
