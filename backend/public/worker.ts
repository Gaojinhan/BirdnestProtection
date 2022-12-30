import cron from 'node-cron';
import { RequestInfo, RequestInit } from 'node-fetch';
import { DOMParser, XMLSerializer } from 'xmldom';
import redisClient from './redisClient'

// Dom file process
const parser = new DOMParser();

// Fetch API and get data
const fetch = (url: RequestInfo, init?: RequestInit) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));

const getAPI = async ()=> {
    const res = await fetch('http://assignments.reaktor.com/birdnest/drones')
                        .then(res => res.text())
                        .then(text => (parser.parseFromString(text)).getElementsByTagName('serialNumber'));
    
    for (let i=0;i<res.length;i++) {
      await getPilot(res.item(i).firstChild.textContent);
    }
   
}

const getPilot = async (serialNumber: string) => {
    await redisClient.connect();
    const cachedPost = await redisClient.get(serialNumber)
    //console.log(client.isOpen);
    if(cachedPost) {
        console.log(`Already in cache:${cachedPost}`);
        await redisClient.disconnect();
        return;
    }

    const res:string = await fetch('http://assignments.reaktor.com/birdnest/pilots/'+serialNumber)
                        .then(res => res.text());
    console.log(`New data:${res}`);
    const noncachedPost: string = await redisClient.setEx(serialNumber, 60*10, res);

    if (!noncachedPost) {
      console.error("Store in cache unsuccessfully!");
      
    }
    await redisClient.disconnect();
    
}

export const cronJob = cron.schedule('*/10 * * * * *', async() => {
    await getAPI();
    console.log('running a task every 10 second');
});