var http = require('http');
var assert = require('assert');

describe('#ProdutosController', function () {
    it('#json list', function (done) {
        const config = {
            hostname: 'localhost',
            port: 8080,
            path: '/products',
            headers: {
                'Accept': 'application/json'
            }
        };
        http
            .get(config, (res) => {
                assert.equal(res.statusCode, 200);
                assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
                done();//Para lidar com testes assincronos -> indica quando o teste pode terminar.
            });
    });

});