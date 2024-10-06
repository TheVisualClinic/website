const express = require('express')
const next = require('next')

const dev = false
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/custom-route', (req, res) => {
    return app.render(req, res, '/custom-route', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.APPLICATION_PORT || 3000
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Web Application Ready on http://localhost:${port}`)
  })
})
