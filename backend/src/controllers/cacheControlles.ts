import * as redis from 'redis';
import { promisify } from "util";

// Redis port
const redisOptions = {url: process.env.REDIS_PORT_URL || 'redis://localhost:6379',}

// Create Redis client on Redis port
const redisClient = redis.createClient(redisOptions);

redisClient.on("error", function (err) {
    console.log("Error " + err);
  });

// Make get and set operation async
function Client() {
    this.set = promisify(redisClient.set).bind(redisClient);
    this.get = promisify(redisClient.get).bind(redisClient);
    return this;
  }

const client = new (Client as any)();

export default client