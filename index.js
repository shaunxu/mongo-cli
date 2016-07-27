'use strict';

const argv = require('minimist')(process.argv.slice(2));
// const uri = argv.uri;
const host = argv.host;
const port = argv.port;
const user = argv.user;
const pass = argv.pass;
const authDb = argv['auth-db'];

const command = require('./query');
if (command && command.collection && command.query) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = `mongodb://${host}:${port}/${authDb}`;
    MongoClient.connect(uri, {
        user: user,
        pass: pass
    }, (error, db) => {
        if (error) {
            console.log(`Error: Failed to connect to MongoDB: ${uri}. ${JSON.stringify(error, null, 2)}`);
        }
        else {
            console.log(`INFO: Connected to MongoDB ${uri}`);

            require('./command')(db, (error) => {
                if (error) {
                    console.log(`Error: Failed to run command on MongoDB. ${JSON.stringify(error, null, 2)}`);
                }
                db.close();
                console.log(`Bye.`);
            });
        }
    });
}
else {
    console.log(`Error: We need query.`);
}