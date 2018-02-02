const app = require('./config/express')();
const port = 8080;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http
    .listen(port, () => {
        console.log(`Server is working at port ${port}`)
    })