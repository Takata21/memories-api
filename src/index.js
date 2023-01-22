import express from 'npm:express'
import fileUpload from 'npm:express-fileupload'
import morgan from 'npm:morgan'
import { config } from 'https://deno.land/std@0.173.0/dotenv/mod.ts'
import authRoutes from './routes/Auth.routes.js'
import './config/mongoose.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
)
app.use('/auth', authRoutes)
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    status: err.status || 500,
    message: err.message || 'Server error',
  })
})
app.listen(3000, () => {
  console.log('server on port: 3000')
})
