module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let dbConnection = app.shared.connectionFactory();
            let db = app.shared.controllers.productsDB;

            db.list(dbConnection, function (erros, resultados) {
                res.render('products/products-list/list', { lista: resultados });
            });

            dbConnection.end(); 
        });
}