//imports
let app = require('./config/express')()
let productsRoutes = require('./app/routes/products')(app)

//variables
const port = 8080

app
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })