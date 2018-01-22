const express = require('express');
const expressLoad = require('express-load');

module.exports = () => {
 
    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    expressLoad('routes', {cwd: 'app'})
        .then('shared')
        .into(app);

    return app;
};