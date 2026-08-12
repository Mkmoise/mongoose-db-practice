const mongoose = require("mongoose");
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
    type: Boolean,
    default: false,
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model( "Post", postSchema);
