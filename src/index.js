import express from 'express'
import dotenv from 'dotenv'
import authorization from './middlewares/authorization.js'
import projectCreatorSignup from './routes/projectCreatorSignup.js'
import projectCreatorFailedLogin from './routes/projectCreatorFailedLogin.js'
import porjectCreatorOtpSender from './routes/projectCreatorOtpSender.js'
dotenv.config()

const app = express()
const port = process.env.SERVER_PORT || 8000
app.use(express.json())
app.use(authorization)


app.post('/api/projectcreator/signup', projectCreatorSignup)
app.post('/api/projectcreator/failed-login', projectCreatorFailedLogin)
app.post('/api/projectcreator/otp', porjectCreatorOtpSender)

app.listen(port, () => {
    console.log("Server Started at port: " + port)
})