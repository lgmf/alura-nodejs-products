module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let dbConnection = app.shared.connectionFactory();
            let db = app.shared.dao.productsDB;

            db.list(dbConnection, function (err, results) {
                if (err) res.status(500).send(err);

                res.render('products/products-list/list', { list: results });
            });

            dbConnection.end();
        });
}