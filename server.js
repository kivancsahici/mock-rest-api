const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('sprints.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
//custom router for query parameters
server.get('/secure/useravatar', (req, res) => {
  res.sendFile(__dirname + '/public/icons/' + req.query.ownerId + '.png');
})

// Use default router
server.use(router)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})