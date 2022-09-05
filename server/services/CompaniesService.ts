import {formResponseData} from "../helpers/formResponseData";
import {getAllCompanies} from "../api/Spimex/Companies";
import {CompaniesListResult} from "../api/Spimex/types";

export const INN_REGION_INDICATOR = { start: 0, end: 2 };
export const DEFAULT_FILTER_RESIDENT = 'Резидент РФ';
export const DEFAULT_LEAD_ZERO = '0';

/**
 * Подсчет количества активных компаний в регионе.
 * */
export const countNumberOfValidRecords = async (region: string, resident: string = DEFAULT_FILTER_RESIDENT) => {
    let data = await getAllCompanies();

    if (data.error)
        return data;
    //Приводим запрос к корректному ввиду для поиска подстроки в ИНН.
    if (region.length < INN_REGION_INDICATOR.end)
        region = DEFAULT_LEAD_ZERO.repeat(
            INN_REGION_INDICATOR.end - region.length,
        ) + region;

    const {records} = data.result as CompaniesListResult;
    const count = records.reduce((count, company) => {
        const {Residence, INN, BlockDate} = company;

        //Проверка страны регистрации
        if (!Residence || !Residence.match(resident))
            return count;
        //Проверка активности компании
        if (BlockDate)
            return count;
        //Проверка региона
        if (!INN || INN.substring(INN_REGION_INDICATOR.start, INN_REGION_INDICATOR.end) !== region)
            return count;

        return count + 1;
    }, 0);

    return formResponseData(false, `${count}`);
}