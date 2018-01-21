module.exports = (app) => {
    app
        .get(`/products`, (request, response) => {
            response.render("products/products-list/list")
        });
}