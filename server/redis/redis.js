const redis = require("redis")
const redisClient = redis.createClient({ host: '127.0.0.1', port: 6379 });


redisClient.on('connect', () => {
    console.log('Connected to Redis12345');
})

redisClient.on('error', (err) => {
    console.log(err.message);
})

redisClient.on('ready', () => {
    console.log('Redis is ready');
})

redisClient.on('end', () => {
    console.log('Redis connection ended');
})

process.on('SIGINT', () => {
    redisClient.quit();
})

redisClient.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.log(err.message);
})



module.exports = redisClient