'use strict';

const { MongoClient } = require('mongodb');

const { DB_HOST, DB_PORT, DB_PASS, DB_USER, DB_NAME } = process.env;
const mongoConnectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

let connection = null;
async function connectToDatabase() {
  if (connection) return connection;

  let client;
  try {
    client = await MongoClient.connect(mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = client.db(DB_NAME);
  } catch (error) {
    console.error('Could not connect to db', mongoConnectionString, error);
    process.exit(1);
  }

  return connection;
}

module.exports = connectToDatabase;
