let express = require('express')
let app = express()
const port = 3000

app
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })