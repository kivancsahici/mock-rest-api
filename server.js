const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('sprints.json')
const middlewares = jsonServer.defaults()

var avatars = {
	"10122" : "bugs.bunny",
	"10123" : "coyote",
	"10124" : "daffy.duck",
	"10125" : "elmer.fudd",
	"10126" : "foghorn.leghorn",
	"10127" : "henery.hawk",
	"10128" : "marvin.martian",
	"10129" : "roadrunner",
	"10130" : "silvester",
	"10131" : "taz",
	"10132" : "tweety",
	"10133" : "yosemite.sam"
}

server.use(middlewares)
//custom router for query parameters
server.get('/secure/useravatar', (req, res) => {
  res.sendFile(__dirname + '/public/icons/' + avatars[req.query.avatarId] + '.png');
})

// Use default router
server.use(router)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})