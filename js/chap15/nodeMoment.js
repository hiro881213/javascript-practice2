// Moment.jsを読み込む
const moment = require('moment-timezone');

const d = moment.tz([2017, 3, 27, 11, 30], 'Asia/Tokyo').toDate();
console.log(d);