import User from '../models/User.js'
import createError from 'npm:http-errors'
import { signAccessToken } from '../helpers/signAccessToken.js'
export async function login(req, res, next) {
  const { email, password } = req.body
  try {
    const userFound = await User.findOne({
      email: email,
    })

    if (!userFound) throw createError.Unauthorized('The user does not exists')

    const isMatch = await userFound.validPassword(password)

    if (!isMatch) {
      throw createError.Unauthorized('password or email incorrect')
    }

    const token = await signAccessToken(userFound.id)
    res.json({ token })
  } catch (error) {
    console.log(error)
    next(error)
  }

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
export async function profile(req, res, next) {
  try {
    const user = await User.findOne({ _id: req.userId }).select('-password')

    if (!user) return res.status(401).json({ message: 'User not found' })

    res.json(user)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
