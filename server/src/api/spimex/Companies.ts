import {formResponseData, ResponseData} from "../../helpers/formResponseData";

const request = require('request');
const url = 'https://api.spimex.com/otc/lookup-tables/1';

export const getAllCompanies = async(): Promise<ResponseData<string | CompaniesListResult>> => {
    const options = {json: true};

    return new Promise((resolve, reject) => {
        request(url, options, (err, response, body) => {
            if (err) {
                return resolve(formResponseData(true, `API Error: ${err}.`));
            }

            const {result, records} = body as CompaniesListResult;

            if (result !== 'OK')
                return resolve(formResponseData(true, `Result Error: ${result}.`));
            if (!Array.isArray(records))
                return resolve(formResponseData(true, `Records Error: Is not array.`));

            return resolve(formResponseData(false, body));
        });
    });
}

export type CompanySchema = {
    ID: string,
    Name: string,
    INN : string,
    Residence: string,
    StoreDate: string,
    BlockDate: string,
}
export type CompaniesListResult = {
    result: string,
    records: CompanySchema[],
}