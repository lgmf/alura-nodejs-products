module.exports = (app) => {
    app
        .get('/offers/new', (req, res) => {
            const dbConnection = app.shared.connectionFactory();
            const db = new app.shared.controllers.product(dbConnection);

            db.list((err, results) => {
                if (err) res.status(500).send(err);

                res
                    .format({
                        html: () => {
                            res.render('offers/offers-new/offers-new', { list: results });
                        },
                        json: () => {
                            res.json(results)
                        }
                    });
            });

            dbConnection.end();
        })
        .post('/offers/new', (req, res) => {
            let offer = req.body;

            const dbConnection = app.shared.connectionFactory();
            const db = new app.shared.controllers.product(dbConnection);

            db.get(offer.product.id, (err, results) => {
                if (err) res.status(500).send(err);

                offer.product = results[0];

                app.get('io').emit('newOffer', offer);

                res.redirect('/offers/new');
            });

            dbConnection.end();

        });

}