var moment = require('moment');

module.exports = {
    getMoment: seconds=> {return moment(new Date(seconds * 1000))}
}