import {CompaniesListResult} from "./types";
import {formResponseData, formResponseError, ResponseData} from "../../helpers/formResponseData";
import {methods} from "../../config/api/SpimexAPI";

const request = require('request');

const EXPECTED_RESULT_STATUS = 'OK';
const API_ERR = 'API Error: ';
const RESULT_ERR = `Result Error: Is not equal ${EXPECTED_RESULT_STATUS}`;
const RECORDS_TYPE_ERR = 'Records Error: Is not array.';

export const getAllCompanies = async(): Promise<ResponseData<string | CompaniesListResult>> => {
    const options = {json: true};

    return new Promise((resolve) => {
        request(methods.companies, options, (err, response, body) => {
            if (err)
                return resolve(formResponseError(`${API_ERR} ${err}`));

            const {result, records} = body as CompaniesListResult;

            if (result !== EXPECTED_RESULT_STATUS)
                return resolve(formResponseError(RESULT_ERR));
            if (!Array.isArray(records))
                return resolve(formResponseError(RECORDS_TYPE_ERR));

            return resolve(formResponseData(false, body));
        });
    });
}