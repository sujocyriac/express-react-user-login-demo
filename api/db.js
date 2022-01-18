class db {
    constructor() {
        this.data = require('./data.json');
    }

    //mathcehs an returns data from array of objects.
    match(userId, userPassword) {
        return this.data.reduce((accumulator, current) => {
            const { password, ...rest } = current;
            if ((userId === current.email || userId === current.username) && userPassword === password) {
                accumulator = rest;
            }
            return accumulator;
        }, {});
    }
}

module.exports = db;
