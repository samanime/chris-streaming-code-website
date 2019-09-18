import { MongoClient } from 'mongodb';
import config from './config';

const { mongo } = config;

export default async () => new Promise((resolve, reject) => {
    let connected = false;
    let db;

    const client = new MongoClient(mongo.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    client.connect(err => {
        if (err) {
            reject(err);
        } else {
            connected = true;
            db = client.db(mongo.database);
            resolve({ connected, client, db });
        }
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
});