const app = require('./config/express')();
const port = 8080;

app
    .listen(port, () => {
        console.log(`Server is working at port ${port}`)
    })