import { Request, Response, NextFunction } from 'express';

export const getCurrentViolations = () => {
    const middleware =async (
        req:Request,
        res: Response,
        next: NextFunction
        ) => {
        try {
            

            next();
        } catch (err) {
            next(err);
        }
    };

    return middleware;
}