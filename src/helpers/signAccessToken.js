import { create } from 'https://deno.land/x/djwt@v2.8/mod.ts'
import { JWT_SECRET } from '../config.js'
console.log(JWT_SECRET)
const key = await crypto.subtle.generateKey(
  { name: 'HMAC', hash: 'SHA-512' },
  true,
  ['sign', 'verify']
)
export const signAccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject(new Error('userId is required'))
    }
    resolve(create({ alg: 'HS512', typ: 'JWT' }, { id: userId }, key))
  })
}
