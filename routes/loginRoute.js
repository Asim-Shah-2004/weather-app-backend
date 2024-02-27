import express from 'express'
const loginRouter = express.Router()
import LoginHandler from '../controller/handleLogin.js'

loginRouter.post('/',LoginHandler)

export default loginRouter