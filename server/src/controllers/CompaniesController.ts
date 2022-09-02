import {calculateActualRFCompaniesByRegion} from "../services/CompaniesService";
import {formResponseData} from "../helpers/formResponseData";

export const countActualRFCompaniesByRegion = async (req, res) => {
    let {region} = req.params;
    let result;

    if (!region)
        return res.json(formResponseData(true, 'Missed required param: region(number)'));

    if (!region.match(/^\d+$/))
        return res.json(formResponseData(true, 'Region is not a number!'));

    if (region.length === 1)
        region = `0${region}`;

    result = await calculateActualRFCompaniesByRegion(region);

    res.json(result);
}