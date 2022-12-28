import * as redis from 'redis';

// Set up redis
const redisOptions = {url: process.env.REDIS_PORT_URL || 'redis://localhost:6379',}
const redisClient = redis.createClient(redisOptions);
redisClient.on('error', (err) => console.log('Redis Client Error', err));

export default redisClient;