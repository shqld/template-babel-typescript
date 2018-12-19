import * as path from 'path'
import express from 'express'

const server = express()

server.get('/assets/:file', (req, res) => {
  res.set('Service-Worker-Allowed', '/')
  res.sendFile(path.resolve(`dist/${req.params.file}`))
})
server.get('/', (req, res) => {
  res.sendFile(path.resolve('client/index.html'))
})

server.listen(process.env.PORT || 3000)
console.log('Server listening...')
