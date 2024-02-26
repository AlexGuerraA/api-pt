const mongoose = require('mongoose');
const config = require('./config.js');

const { MONGO_DOMAIN, MONGO_HOST, MONGO_PORT, MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME } = config;

let password = encodeURIComponent(MONGO_PASSWORD);

if (MONGO_DOMAIN === 'mongodb') {
  MONGO_HOST = MONGO_HOST + ':' + MONGO_PORT;
}

const url = `${MONGO_DOMAIN}://${MONGO_USER}:${password}@${MONGO_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

exports.connectToDB = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
});