const { Schema } = require("mongoose");
const replySchema = require("./Reply");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: "Leave a comment to let us know what you think!",
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    replies: [replySchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

commentSchema.virtual("replyCount").get(function () {
  return this.replies.length;
});

const Comment = model("Comment", commentSchema);

module.exports = commentSchema;
