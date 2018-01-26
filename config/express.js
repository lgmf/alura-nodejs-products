const express = require('express');
const expressLoad = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {

    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    expressLoad('routes', { cwd: 'app' })
        .then('shared')
        .into(app);

    return app;
};