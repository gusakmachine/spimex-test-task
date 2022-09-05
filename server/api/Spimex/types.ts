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