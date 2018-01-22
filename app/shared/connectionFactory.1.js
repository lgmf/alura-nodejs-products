const mysql = require('mysql');

let createDBConnection = () => {
    return mysql.createConnection({
        host: 'HOST_ADDRESS',
        user: 'USER_NAME',
        password: 'USER_PASSWORD',
        database: 'DATABASE_NAME'
    });
}

module.exports = () => {
    return createDBConnection();
}