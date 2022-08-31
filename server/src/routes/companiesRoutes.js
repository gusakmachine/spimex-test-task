const companiesController = require('../controllers/companiesController');

function companiesRoutes(app) {
    app.get('/companies/countActualRFCompaniesByRegion/:region', companiesController.countActualRFCompaniesByRegion);
}

module.exports = companiesRoutes;