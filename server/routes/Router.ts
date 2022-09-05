import {Application} from "express";
import {CompaniesRouter} from "./CompaniesRoutes";

export const Router = (app: Application) => {
    app.use('/companies', CompaniesRouter());
};