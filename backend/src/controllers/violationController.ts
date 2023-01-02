import { Request, Response, NextFunction } from 'express';
import redisClient from '../../public/redisClient';
import violation from 'violations';
import cron from 'node-cron';
//import WebSocket from 'ws';


export const getCurrentViolations = () => {
    const middleware =async (
        req:Request,
        res: Response,
        next: NextFunction
        ) => {
        try {
            let responseArray: violation[] = [];
            await redisClient.connect();
            //console.log(redisClient.isOpen);
            for await (const key of redisClient.scanIterator()) {
                // use the key!
                const pilot = await redisClient.get(key);
                //console.log(JSON.parse(pilot));
                responseArray.push(JSON.parse(pilot));
              }
            
            await redisClient.disconnect();
            res.locals.violations=responseArray;
            next();
        } catch (err) {
            next(err);
        }
    };

    return middleware;
}