const request = require('request');
const formResponseData = require('../../helpers/formResponseData');
const url = 'https://api.spimex.com/otc/lookup-tables/1';

const getAllCompanies = async () => {
    const options = {json: true};

    return new Promise((resolve, reject) => {
        request(url, options, (err, response, body) => {
            if (err) {
                resolve(formResponseData(true, `API Error: ${err}.`));
            }

            resolve(formResponseData(false, body));
        });
    });
}

module.exports = {
    getAllCompanies
};