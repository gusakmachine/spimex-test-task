const {getAllCompanies} = require('../api/spimex/companies');
const formResponseData = require('../helpers/formResponseData');

const calculateActualRFCompaniesByRegion = async (region) => {
    if (!region) {
        return formResponseData(true, 'Missed required param: region(number)');
    }

    if (region.length === 1)
        region = `0${region}`;

    let data = await getAllCompanies();

    if (data.error)
        return data;

    const {result, records} = data.result;
    const INN_REGION_INDICATOR = {
        start: 0,
        end: 2,
    }

    if (result !== 'OK')
        return formResponseData(true, `Result Error: ${result}.`);
    if (!Array.isArray(records))
        return formResponseData(true, `Records Error: Is not array.`);

    let count = 0;

    for (let company of records) {
        const {Residence, INN, BlockDate} = company;

        if (!Residence || !Residence.match('Резидент РФ'))
            continue;
        if (BlockDate)
            continue;
        if (!INN || INN.substr(INN_REGION_INDICATOR.start, INN_REGION_INDICATOR.end) !== region)
            continue;

        count++;
    }

    return formResponseData(false, count);
}

module.exports = {
    calculateActualRFCompaniesByRegion
}