import express from 'express';
import { MongoClient } from 'mongodb';
import config from './config';

const { mongo } = config;

const PORT = process.env.PORT || 8000;
const app = express();
const client = new MongoClient(mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let connected = false;
let db;

client.connect(err => {
  if (!err) {
    connected = true;
    db = client.db(mongo.database)
  }
});

app.get('/health/mongo', (_, res) => {
  res.send(`Mongo Connected: ${connected ? 'Yes' : 'No'}`);
});

app.get('/', (_, res) => {
  res.send(`
    <!DOCTYPE html>
    <body>
    <h1>Hello World</h1>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

const shutDown = () => {
  console.log('Shutting down gracefully...');
  try {
    client.close(true);
    console.log('Mongo client closed.');
  } catch (ex) {
    console.error('Mongo client close error: ', ex);
  }

  process.exit();
};

if (process.platform === "win32") {
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);