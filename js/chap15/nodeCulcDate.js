console.log('------MomentJSの演算------');

// Moment.jsを読み込む
const moment = require('moment-timezone');

// 現在の時間を取得する
let m = moment();

console.log(m.format());

// 3日後になる
m.add(3, 'days');
console.log(m.format());

// 2年前にする
m.subtract(2, 'years');
console.log(m.format());

// リセット
m = moment();

// mは1/1になる
m.startOf('year');
console.log(m.format());

// mは1/31になる
m.endOf('month');
console.log(m.format());