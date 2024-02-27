import express from 'express'
const RegisterRouter = express.Router()
import handleRegister from '../controller/handleRegister.js'

RegisterRouter.post('/',handleRegister)

export default RegisterRouter