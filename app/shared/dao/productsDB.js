//vários returns para evitar que express-load tente executar
//a função quando carregar o arquivo
module.exports = () => {
    return (dbConnection) => {
        return {
            list: (callback) => {
                dbConnection.query('select * from produtos', callback);
            }
        }
    }
}

