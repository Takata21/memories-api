import { model, Schema } from 'npm:mongoose'
import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts'
const userSchema = new Schema(
  {
    image: {
      type: String,
      default: 'default',
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

userSchema.methods.generateHash = async function (password) {
  const salt = await bcrypt.genSalt(8)
  return await bcrypt.hash(password, salt)
}
userSchema.methods.validPassword = async function (password) {
  return await await bcrypt.compare(password, this.password)
}
export default model('User', userSchema)
