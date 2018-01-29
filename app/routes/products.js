module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let dbConnection = app.shared.connectionFactory();
            let db = new app.shared.controllers.product(dbConnection);

            db.list((err, results) => {
                if (err) res.status(500).send(err);

                res.format({
                    html: () => {
                        res.render('products/products-list/products-list', { list: results });
                    },
                    json: () => {
                        res.json(results)
                    }
                });
            });

            dbConnection.end();
        })
        .get(`/products/new`, (req, res) => {
            res.render('products/products-new/products-new', { errors: {}, product: {} });
        })
        .post(`/products`, (req, res) => {
            let product = req.body;

            req.assert('title', 'product title is required').notEmpty();
            req.assert('price', 'price must be a number').isFloat();

            const errors = req.validationErrors()
            if (errors) {
                res.format({
                    html: () => {
                        res
                            .status(400)
                            .render('products/products-new/products-new', { errors, product })
                    },
                    json: () => {
                        res
                            .status(400)
                            .json({ errors, product })
                    }
                });

                return false;
            }

            let dbConnection = app.shared.connectionFactory();
            let db = new app.shared.controllers.product(dbConnection);

            db.save(product, (err, results) => {
                if (err)
                    res
                        .status(500)
                        .json({
                            success: false,
                            message: `error saving product --> ${err}`
                        });

                res.redirect('/products');
            });

            dbConnection.end();
        });

}