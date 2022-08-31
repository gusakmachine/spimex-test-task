export const url = `http://${window.location.hostname}:8000/companies`;

export async function countNumberOfValidRecords(region: number) {
    const method = 'countActualRFCompaniesByRegion';
    let count: number | undefined;

    try {
        const response = await fetch(`${url}/${method}/${region}`, {mode: 'cors'});
        const json = await response.json();
        const {error, result} = json;

        if (!error)
            count = +result;
    } catch (e) {
        console.log(e)
    }

    return count;
}