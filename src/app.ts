import express from 'express'
import router from './routes'
import connectDatabase from './database'

connectDatabase()

const app = express()
app.use(express.json())
app.use(router)

export default app