import express, { Request, Response } from 'express';
import { body, query, validationResult } from 'express-validator';
import * as violationController from '../controllers/violationController';


export const router = express.Router();

router.get(
    '/',
    violationController.getCurrentViolations(),
    (req: Request, res: Response) => {
        res.status(200).json(res.locals.violations);
    }
);