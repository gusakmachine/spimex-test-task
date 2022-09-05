export const BASE_URL = `http://${window.location.hostname}:8000`;
export const SPIMEX_COMPANIES_URL = `${BASE_URL}/companies`;

export const methods = {
    countNumberOfValidRecords: `${SPIMEX_COMPANIES_URL}/countNumberOfValidRecords`,
};