const app = require('../config/express')();
const request = require('supertest')(app);

const cleanDB = (done) => {
    let dbConnection = app.shared.connectionFactory();
    dbConnection.query("delete from products", (error, result) => {
        if (!error) {
            done();
        }
    });
    dbConnection.end();
}

describe('#ProdutosController', () => {

    const product = {
        title: "",
        price: "dasdsa",
        description: ""
    };

    beforeEach(cleanDB);

    it('#JSON list', (done) => {
        request
            .get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#HTML list', (done) => {
        request
            .get('/products')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });

    it('#save JSON product with INVALID data', (done) => {
        request
            .post('/products')
            .set('Accept', 'application/json')
            .send(product)
            .expect(400, done); //bad request
    });

    it('#save JSON product with VALID data', (done) => {
        product.title = "teste";
        product.price = 125.25;
        product.description = "teste";

        request
            .post('/products')
            .send(product)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done); //redirect
    });

    it('#save URLENCODED product with VALID data', (done) => {

        request
            .post('/products')
            .type('form')
            .send(product)
            .expect(302, done); //redirect
    });

    it('#save URLENCODED product with INVALID data', (done) => {

        product.title = "teste";
        product.price = "dadsadasd";
        product.description = "teste";

        request
            .post('/products')
            .type('form')
            .send(product)
            .expect(400, done); //bad request
    });

});