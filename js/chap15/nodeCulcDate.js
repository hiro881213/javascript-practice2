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

console.log('------MomentJSのメソッドチェーン------');

console.log(moment().format());

const mm = moment()
            .add(10, 'hours')       // 10時間加算
            .subtract(3, 'days')    // 3日減算
            .endOf('month');

console.log(mm.format());

console.log('------相対的な日時の利用------');

// a few seconds ago
console.log(moment().fromNow());
console.log(moment().subtract(1, 'year').format());

console.log('===========');

// a few seconds ago
console.log(moment().subtract(10, 'seconds').fromNow());

// a few seconds ago
console.log(moment().subtract(44, 'seconds').fromNow());

// a minute ago
console.log(moment().subtract(45, 'seconds').fromNow());

console.log('===========');

// 5 minutes ago
console.log(moment().subtract(5, 'minutes').fromNow());

// 44 minutes ago
console.log(moment().subtract(44, 'minutes').fromNow());

// an hour ago
console.log(moment().subtract(45, 'minutes').fromNow());

console.log('===========');

// 5 hours ago
console.log(moment().subtract(5, 'hours').fromNow());

// 21 hours ago
console.log(moment().subtract(21, 'hours').fromNow());

// a day ago
console.log(moment().subtract(22, 'hours').fromNow());

console.log('===========');

// 10 months ago
console.log(moment().subtract(320, 'days').fromNow());

// 10 months ago
console.log(moment().subtract(321, 'days').fromNow());