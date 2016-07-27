'use strict';

module.exports = function (db, callback) {
    // put you command and show result here.

    db.collection('project_tasks').count({}, (error, count) => {
        if (error) {
            return callback(error);
        }
        else {
            console.log(count);
            return callback(null);
        }
    });
};
