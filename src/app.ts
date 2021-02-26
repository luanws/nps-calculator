import express from 'express'
import 'express-async-errors'
import connectDatabase from './database'
import errorHandler from './errors/error-handler'
import router from './routes'

connectDatabase()

const app = express()
app.use(express.json())
app.use(router)
app.use(errorHandler)

export default app