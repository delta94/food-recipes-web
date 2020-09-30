// URL e PORTA base vinda da aplicação API

import dotenv from 'dotenv'

dotenv.config()

const baseURL = process.env.BASE_URL || 'http://localhost:3333'
export default baseURL
