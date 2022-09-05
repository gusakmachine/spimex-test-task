import {methods} from "../../config/SpimexCompaniesAPI";

export const countNumberOfValidRecords = async (region: number): Promise<number> => {
    const response = await fetch(`${methods.countNumberOfValidRecords}/${region}`);
    const json = await response.json();
    const {error, result} = json;

    if (error)
        throw result;

    return +result;
}