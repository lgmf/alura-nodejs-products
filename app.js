//imports
let app = require('./config/express')()
let productsRoutes = require('./app/routes/products')(app)

//variables
const port = 3000

app
    .listen(port, () => {
        console.log(`Server is working at ${port}`)
    })