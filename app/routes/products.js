module.exports = (app) => {
    app
        .get(`/products`, (req, res) => {

            let dbConnection = app.shared.connectionFactory();
            let db = new app.shared.dao.Product(dbConnection);

            db.list((err, results) => {
                if (err) res.status(500).send(err);

                res.render('products/products-list/products-list', { list: results });
            });

            dbConnection.end();
        })
        .get(`/products/new`, (req, res) => {
            res.render('products/products-new/products-new');
        })
        .post(`/products`, (req, res) => {

            let product = req.body;
            
            if (!product)
                res
                    .status(500)
                    .json({
                        success: false,
                        message: `product cannot be null`
                    });

            let dbConnection = app.shared.connectionFactory();
            let db = new app.shared.dao.Product(dbConnection);

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