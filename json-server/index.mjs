import {readFileSync} from 'fs'
import jsonServer from 'json-server'
import jwt from 'jsonwebtoken'
import {dirname, resolve} from 'path'
import {fileURLToPath} from 'url'

const _dirname = dirname(fileURLToPath(import.meta.url))

const server = jsonServer.create()
const router = jsonServer.router(resolve(_dirname, 'db.json'))

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })

  next()
})

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({message: 'Auth needed'})
  }

  next()
})

server.use(jsonServer.defaults())
server.use(router)

server.post('/api/login', (req, res) => {
  const {username, password} = req.body
  const db = JSON.parse(readFileSync(resolve(_dirname, 'db.json'), 'utf-8'))
  const {users} = db
  const userFromDb = users.find((user) => user.username === username && user.password === password)

  if (userFromDb) {
    return res.json(userFromDb)
  }

  return res.status(401).json({message: 'Login or password incorrect'})
})

server.listen(8000, () => {
  console.log('🌏 Server is running on port 8000')
})
