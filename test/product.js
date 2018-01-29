var http = require('http');
var request = require('request');
var assert = require('assert');

describe('#ProdutosController', function () {
    const config = {
        hostname: 'localhost',
        port: 8080,
        path: '/products'
    };

    const product = {
        title: "",
        price: "dasdsa",
        description: ""
    }

    it('#JSON list', function (done) {
        config.headers = {
            'Accept': 'application/json'
        };

        http
            .get(config, (res) => {
                assert.equal(res.statusCode, 200);
                assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
                done();//Para lidar com testes assincronos -> indica quando o teste pode terminar.
            });
    });

    it('#HTML list', function (done) {
        config.headers = {};
        http
            .get(config, (res) => {
                assert.equal(res.statusCode, 200);
                assert.equal(res.headers['content-type'], 'text/html; charset=utf-8');
                done();//Para lidar com testes assincronos -> indica quando o teste pode terminar.
            });
    });

    it('#save JSON product with INVALID data', function (done) {
        request.post(
            'http://localhost:8080/products',
            { json: product },
            (error, res, body) => {
                assert.equal(res.statusCode, 400);
                done();//Para lidar com testes assincronos -> indica quando o teste pode terminar.
            }
        );
    });

    it('#save JSON product with VALID data', function (done) {
        product.title = "teste";
        product.price = 125.25;
        product.description = "teste";

        request.post(
            'http://localhost:8080/products',
            { json: product },
            (error, res, body) => {
                assert.equal(res.statusCode, 302);
                done();//Para lidar com testes assincronos -> indica quando o teste pode terminar.
            }
        );
    });



});