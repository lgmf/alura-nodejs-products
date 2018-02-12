module.exports = (app) => {

    app.get('/', (req, res) => {
        const dbConnection = app.shared.connectionFactory();
        const db = new app.shared.controllers.product(dbConnection);
        db.list((err, results) => {
            if (err) res.status(500).send(err);

            res
                .format({
                    html: () => {
                        res.render('home/index', { list: results });
                    },
                    json: () => {
                        res.json(results)
                    }
                });
        });

        dbConnection.end();
    })

};