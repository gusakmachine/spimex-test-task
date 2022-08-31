const {calculateActualRFCompaniesByRegion} = require('../services/companiesServices');

const countActualRFCompaniesByRegion = async (req, res) => {
    const {region} = req.params;
    const result = await calculateActualRFCompaniesByRegion(region);

    res.set('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(result));
}

module.exports = {
    countActualRFCompaniesByRegion,
}