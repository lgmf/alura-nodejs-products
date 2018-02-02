
class Product {
    constructor(dbConnection) {
        this._dbConnection = dbConnection;
    }

    save(product, callback) {
        this._dbConnection.query(`insert into products set ?`, product, callback);
    }

    list(callback) {
        this._dbConnection.query('select * from products', callback);
    }

    get(productId, callback) {
        this._dbConnection.query(`select * from products where id=?`, productId, callback);
    }
}

//Exports retorna uma function por causa da limitação do express load.
module.exports = () => {
    return Product;
}