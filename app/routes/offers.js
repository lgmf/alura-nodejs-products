module.exports = (app) => {
    app
        .get('/offers/new', (req, res) => {
            const dbConnection = app.shared.connectionFactory();
            let db = new app.shared.controllers.product(dbConnection);

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
        })
        .post('/offers/new', (req, res) => {
            let offer = req.body;
            console.log(offer)
            res.end();
        });

}