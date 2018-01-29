const [express,
    expressLoad,
    bodyParser,
expressValidator] =
    [
        require('express'),
        require('express-load'),
        require('body-parser'),
        require('express-validator')
    ]

module.exports = () => {

    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //Middlewares
    app.use(bodyParser.urlencoded({ extended: true }));//Formato tradiciona utilizado pela tag FORM do HTML
    app.use(bodyParser.json());//Caso no corpo da requisição tenha objetos no formato JSON.
    app.use(expressValidator())

    expressLoad('routes', { cwd: 'app' })
        .then('shared')
        .into(app);

    return app;
};