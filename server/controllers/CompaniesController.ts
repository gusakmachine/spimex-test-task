import * as CompaniesService from "../services/CompaniesService";
import {formResponseError} from "../helpers/formResponseData";

const REQUIRED_ERR = 'Missed required param: region(numeric)';
const TYPE_ERR = 'Region is not a number!';

/**
 * Подсчитывает количество компаний в заданном регионе.
 * */
export const countNumberOfValidRecords = async (req, res) => {
    const {region} = req.params;

    if (!region)
        return res.json(formResponseError(REQUIRED_ERR));

    //Если не число
    if (!region.match(/^\d+$/))
        return res.json(formResponseError(TYPE_ERR));

    const result = await CompaniesService.countNumberOfValidRecords(region);

    res.json(result);
}