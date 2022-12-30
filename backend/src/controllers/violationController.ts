import { Request, Response, NextFunction } from 'express';
import redisClient from '../../public/redisClient';
import violation from 'violations';
import cron from 'node-cron';
//import WebSocket from 'ws';
import sockserver from '../../public/redisClient'


/* const getData = async() => {
    let responseArray: violation[] = [];
    //await redisClient.connect();
    //console.log(redisClient.isOpen);
    for await (const key of redisClient.scanIterator()) {
        // use the key!
        const pilot = await redisClient.get(key);
        //console.log(JSON.parse(pilot));
        responseArray.push(JSON.parse(pilot));
        //await redisClient.disconnect();
        }
            
    //await redisClient.disconnect();
    return responseArray;
} */


/* export const getCurrentViolations = () => {
    const middleware =async (
        req:Request,
        res: Response,
        next: NextFunction
        ) => {
        try {
            //await redisClient.connect();
            //const sockserver = new WebSocket.Server({port: 8081});
            sockserver.on('connection', (ws) => {
            console.log('New client connected!'); 
            ws.on('close', () => console.log('Client has disconnected!'));
            });
            
            sockserver.clients.forEach(async(client) => {
            await getData().then(data => client.send(JSON.stringify(data)));

            await redisClient.quit();
            next();
        } catch (err) {
            next(err);
        }
    };

    return middleware;
} */

export const getCurrentViolations = () => {
    const middleware =async (
        req:Request,
        res: Response,
        next: NextFunction
        ) => {
        try {
            let responseArray: violation[] = [];
            await redisClient.connect();
            console.log(redisClient.isOpen);
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