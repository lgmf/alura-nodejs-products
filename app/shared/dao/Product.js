//vários returns para evitar que express-load tente executar
//a função quando carregar o arquivo
function Product(dbConnection) {
    this._dbConnection = dbConnection;
}

Product.prototype.list = function (callback) {
    this._dbConnection.query('select * from products', callback);
}

Product.prototype.save = function (product, callback) {
    this._dbConnection.query(`insert into products set ?`, product, callback);
}

module.exports = function () {
    return Product;
}