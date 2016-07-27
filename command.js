'use strict';

const ObjectId = require('mongodb').ObjectID;

module.exports = function (db, callback) {
    // put you command and show result here.

    db.collection('projects').count({
        team: ObjectId("5568229f68c24113327624d8")
    }, (error, count) => {
        if (error) {
            return callback(error);
        }
        else {
            console.log(count);
            return callback(null);
        }
    });
};
