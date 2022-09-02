import * as CompaniesController from "../controllers/CompaniesController";

export const CompaniesRouter = (app) => {
    app.get(
        '/companies/countActualRFCompaniesByRegion/:region',
        CompaniesController.countActualRFCompaniesByRegion
    );
}