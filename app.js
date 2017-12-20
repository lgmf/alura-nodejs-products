let express = require('express')
let app = express()

const port = 3000

const template = 
`<html>
    <body>
        <h1>All Products</h1>
    </body>
</html>`

app
    .get(`/products`, (request, response) => {
        response.send(template)
    })

app
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })