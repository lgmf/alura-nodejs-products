//vários returns para evitar que express-load tente executar
//a função quando carregar o arquivo
function Product(dbConnection){
    this._dbConnection = dbConnection;
}

Product.prototype.list = function(callback){
    this._dbConnection.query('select * from produtos', callback);
}

module.exports = function(){
    return Product;
}