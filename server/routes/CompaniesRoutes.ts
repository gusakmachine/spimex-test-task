import express, {Router} from "express";
import * as CompaniesController from "../controllers/CompaniesController";

const router = express.Router();

export const CompaniesRouter = (): Router => {
    router.get(
        '/countNumberOfValidRecords/:region',
        CompaniesController.countNumberOfValidRecords
    );

    return router;
}