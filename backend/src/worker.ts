import client from './controllers/cacheControlles';
import cron from 'node-cron';
import { RequestInfo, RequestInit } from 'node-fetch';
import { DOMParser, XMLSerializer } from 'xmldom';

const parser = new DOMParser();
const serialized = new XMLSerializer();

const fetch = (url: RequestInfo, init?: RequestInit) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));

export const getAPI = async ()=> {
    const res = await fetch('http://assignments.reaktor.com/birdnest/drones')
                        .then(res => res.text())
                        .then(text => (parser.parseFromString(text)).getElementsByTagName('serialNumber'))
                        .then(node => {for (let i=0;i<node.length;i++) {getPilot(node.item(i).firstChild.textContent)}});
                        //.then(text => console.log(text))
    
}

const getPilot = async (serialNumber: string) => {
    const res = await fetch('http://assignments.reaktor.com/birdnest/pilots/'+serialNumber)
                        .then(res => res.text())
                        .then(text => console.log("This plot is:", text));
}

export const cronJob = cron.schedule('*/30 * * * * *', () => {
    //getAPI();
    console.log('running a task every 30 second');
  });