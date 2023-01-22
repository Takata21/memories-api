import 'https://deno.land/std@0.173.0/dotenv/load.ts'

export const MONGODB_URL = Deno.env.get('MONGODB_URL')
export const JWT_SECRET = Deno.env.get('JWT_SECRET')
export const CLOUDINARY_CLOUD_NAME = Deno.env.get('CLOUDINARY_CLOUD_NAME')
export const CLOUDINARY_API_KEY = Deno.env.get('CLOUDINARY_API_KEY')
export const CLOUDINARY_API_SECRET = Deno.env.get('CLOUDINARY_API_SECRET')
