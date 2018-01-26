module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let dbConnection = app.shared.connectionFactory();
            let db = new app.shared.dao.Product(dbConnection);

            db.list((err, results) => {
                if (err) res.status(500).send(err);

                res.render('products/products-list/list', { list: results });
            });

            dbConnection.end();
        });
}