import User from '../models/User.js'
import createError from 'npm:http-errors'
import { signAccessToken } from '../helpers/signAccessToken.js'
export function login(req, res) {
  res.send('login')
}
export async function register(req, res, next) {
  try {
    const { image, userName, email, password } = req.body

    const userFound = await User.findOne({
      email,
    })

    if (userFound) throw createError.Conflict('The user already exists')

    const user = new User({
      image,
      userName,
      email,
    })

    user.password = await user.generateHash(password)

    const userSaved = await user.save()

    const token = await signAccessToken(userSaved.id)
    res.json({ token })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
export function profile(req, res) {
  res.send('profile')
}
