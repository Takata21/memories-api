import { connect } from 'npm:mongoose'
import { MONGODB_URL } from '../config.js'
try {
  const db = await connect(MONGODB_URL)
  console.log('Database connected to: ', db.connection.name)
} catch (error) {
  console.log(error)
}
