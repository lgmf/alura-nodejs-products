//imports
let express = require('express')
let app = express()

//variables
const port = 3000

app
    .set('view engine','ejs')
    .get(`/products`, (request, response) => {
        response.render("products/products-list/list")
    })
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })