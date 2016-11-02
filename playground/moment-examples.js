var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timeStamp = 1478026063;
var currentMoment = moment.unix(timeStamp);
console.log('current moment', currentMoment.format('DD.MM.YYYY @ HH:mm'));