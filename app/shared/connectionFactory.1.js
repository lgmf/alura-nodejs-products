const mysql = require('mysql');
module.exports = () => {
    return mysql.createConnection({
        host: 'HOST_ADDRESS',
        user: 'USER_NAME',
        password: 'USER_PASSWORD',
        database: 'DATABASE_NAME'
    });
}