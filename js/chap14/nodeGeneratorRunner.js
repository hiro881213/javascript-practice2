
const fs = require('fs');

console.log('------ジェネレータランナー------');

// ジェネレータランナー処理
function grun(g) {

    const it = g();

    (function iterate(val) {

        const x = it.next(val);

        if (!x.done) {

            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }

        }

    })();

}

// ファイル読み込み処理
function readFile(fileName) {

    return new Promise(
        (onFulfilled, onRejected) => {

            // ファイル読み込み処理を実行する
            fs.readFile(
                fileName,
                'utf-8',
                (err, data) => err ? onRejected(err) : onFulfilled(data));
        }
    );

}

// ファイル書き込み処理
function writeFile(fileName, data) {

    return new Promise(
        
        (onFulfilled, onRejected) => {

            // ファイル書き込み処理を実行する
            fs.writeFile(
                fileName, 
                data, 
                err => err ? onRejected(err) : onFulfilled('OK'));

        }

    );

}

// ジェネレータ生成
function* fileReadAndWrite() {

    const dataA = yield readFile('a.txt');
    const dataB = yield readFile('b.txt');
    const dataC = yield readFile('c.txt');

    yield writeFile('gd.txt', dataA + dataB + dataC);

}

grun(fileReadAndWrite);