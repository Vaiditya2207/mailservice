import express from 'express'
import dotenv from 'dotenv'
import authorization from './middlewares/authorization.js'
import projectCreatorSignup from './routes/projectCreatorSignup.js'
dotenv.config()

const app = express()
const port = process.env.SERVER_PORT || 8000
app.use(express.json())
app.use(authorization)


app.post('/api/projectcreator/signup', projectCreatorSignup)

app.listen(port, () => {
    console.log("Server Started at port: " + port)
})