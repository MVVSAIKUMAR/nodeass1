const http = require("http");
const server = http.createServer(function(req,res){
    res.write(<h1>"this is our first server</h1>)
    res.end("bye")
})
server.listen(4000)