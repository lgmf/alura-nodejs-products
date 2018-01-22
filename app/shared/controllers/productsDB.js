module.exports = function () {
    this.list = function (connection, callback) {
        connection.query('select * from produtos', callback);
    }
    return this;
}