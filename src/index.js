import express from 'npm:express'
import morgan from 'npm:morgan'
import { config } from 'https://deno.land/std@0.173.0/dotenv/mod.ts'
import './config/mongoose.js'

const app = express()
app.use(express.json())
// app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3000, () => {
  console.log('server on port: 3000')
})
