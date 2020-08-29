const db = require('./connection.js');

const db_queries = {
    selectAll: (cb) => {
        const query = 'SELECT * FROM burgers';
        db.query(query, (err, data) => {
            if (err) cb(err, null);
            cb(null, data);
        })
    }
};

module.exports = db_queries;
