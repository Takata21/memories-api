import { model, Schema } from 'npm:mongoose'

const PostSchema = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    creator: {
      type: String,
    },
    tags: {
      type: [String],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('Post', PostSchema)
