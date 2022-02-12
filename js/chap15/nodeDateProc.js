
console.log('------Dateオブジェクトの文字列化------');

const d = new Date(Date.UTC(1930, 4, 10, 10, 0));

// 1930/05/10
console.log(d.toLocaleDateString());

// 19:00:00
console.log(d.toLocaleTimeString());

// 19:00:00 GMT+0900 (日本標準時)
console.log(d.toTimeString());

// Sat, 10 May 1930 10:00:00 GMT
console.log(d.toUTCString());

console.log('------moment.jsの文字列化------');

const moment = require('moment-timezone');

// 1930-05-10
console.log(moment(d).format('YYYY-MM-DD'));

// 1930-05-10 19:00
console.log(moment(d).format("YYYY-MM-DD HH:mm"));

// 1930-05-10 19:00 +09:00
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));

// 1930-05-10 19:00 UTC+09:00
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));

// Saturday, May the 10th, 1930
console.log(moment(d).format('dddd, MMMM [the] Do, YYYY'));

// 7:00 pm
console.log(moment(d).format('h:mm a'));

// 1930年5月10日 07:00PM
console.log(moment(d).format('YYYY年M月D日 hh:mmA'));