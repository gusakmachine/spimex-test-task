const companiesRoutes = require('./companiesRoutes');

module.exports = function router(app) {
    companiesRoutes(app);
};