//imports
let app = require('./config/express')


//variables
const port = 3000

app
    .get(`/products`, (request, response) => {
        response.render("products/products-list/list")
    })
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })