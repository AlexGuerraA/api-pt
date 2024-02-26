const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    MONGO_DOMAIN: process.env.MONGO_DOMAIN,
    MONGO_HOST:process.env.MONGO_HOST,
    MONGO_PORT:process.env.MONGO_PORT,
    MONGO_USER:process.env.MONGO_USER,
    MONGO_PASSWORD:process.env.MONGO_PASSWORD,
    MONGO_DB_NAME:process.env.MONGO_DB_NAME
};