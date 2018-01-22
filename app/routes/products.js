module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let db = app.shared.connectionFactory();

            db.query('select * from produtos', function (err, results) {
                if (err) res.status(500).send(err);

                res.render('products/products-list/list', { lista: results });
            });

            db.end();
        });
}