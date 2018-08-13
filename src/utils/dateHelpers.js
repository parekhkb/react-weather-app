import moment from 'moment';

const getMoment = seconds => moment(new Date(seconds * 1000));

const getDateString = dt => getMoment(dt).format("dddd, MMMM Do YYYY");

const getTimeString = dt => getMoment(dt).format("h:mm:ss A");

export {
    getDateString,
    getTimeString
};