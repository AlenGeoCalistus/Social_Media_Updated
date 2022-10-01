import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    username: { type: String },
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],

    comments: [],
    image: String,
    video: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
