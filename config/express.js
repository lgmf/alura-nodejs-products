let express = require('express')();
express.set('view engine', 'ejs')

let initializeExpress = () => { return express }

module.exports = initializeExpress()