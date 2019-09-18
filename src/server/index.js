import { join } from 'path';
import express from 'express';
import connectMongo from './mongo';

const PORT = process.env.PORT || 8000;
const app = express();

(async () => {
  const mongo = await connectMongo();

  app.get('/health/mongo', (_, res) => {
    res.send(`Mongo Connected: ${mongo.connected ? 'Yes' : 'No'}`);
  });

  app.use('/client', express.static(join(__dirname, '../client')));
  app.use('/public', express.static(join(__dirname, '../public')));

  app.get('/favicon.ico', (_, res) => {
    res.status(204).header("Expires", (new Date(Date.now() + 1000 * 60 * 60 * 24 * 365))
        .toUTCString()).end();
  });

  app.get('**', (_, res) => {
    res.sendFile(join(__dirname, '../public/index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });
})()
    .catch(err => console.error(err));