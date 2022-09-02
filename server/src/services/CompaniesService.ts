import {formResponseData} from "../helpers/formResponseData";
import {CompaniesListResult, getAllCompanies} from "../api/spimex/Companies";

const INN_REGION_INDICATOR = {
    start: 0,
    end: 2,
}

export const calculateActualRFCompaniesByRegion = async (region: string) => {
    let data = await getAllCompanies();

    if (data.error)
        return data;

    const {records} = data.result as CompaniesListResult;

    let count = 0;

    for (let company of records) {
        const {Residence, INN, BlockDate} = company;

        if (!Residence || !Residence.match('Резидент РФ'))
            continue;
        if (BlockDate)
            continue;
        if (!INN || INN.substring(INN_REGION_INDICATOR.start, INN_REGION_INDICATOR.end) !== region)
            continue;

        count++;
    }

    return formResponseData(false, `${count}`);
}