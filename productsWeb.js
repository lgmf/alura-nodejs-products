let http = require('http')
let port = 3000;

http
    .createServer((req, res) => {
        res.end("<html><body><h1>Listando os produtos</h1></body></html>");
    })
    .listen(port);

console.log(`Server is working at port ${port}`);