import { create, verify, decode } from 'https://deno.land/x/djwt@v2.8/mod.ts'
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
    console.log(key)
    resolve(create({ alg: 'HS512', typ: 'JWT' }, { id: userId }, key))
  })
}

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization
  console.log(token)
  if (!token) res.status(401).send({ message: 'Unauthorized' })
  try {
    const [header, payload, signature] = decode(token)
    // const payload = await verify(token, key)
    console.log(payload)
    // req.userId = payload.id
    next()
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' })
    console.log(error)
  }
}
