import { v2 as cloudinary } from 'npm:cloudinary'

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from '../config.js'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
})
export async function uploadImage(file) {
  console.log(file)
  try {
    const result = await cloudinary.uploader.upload(file)
    return result
  } catch (error) {
    console.log(error)
  }
}
