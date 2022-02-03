console.log('------ジェネレータランナーとPromiseAll------');

const fs = require('fs');

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
        (resolve, reject) => {

            // ファイル読み込み処理を実行する
            fs.readFile(fileName, 'utf-8', (err, data) => err ? reject(err) : resolve(data));

        }
    );

}

// ファイル書き込み処理
function writeFile(fileName, data) {

    return new Promise(
        (resolve, reject) => {

            // ファイル書き込み処理を実行する
            fs.writeFile(fileName, data, err => err ? reject(err) : resolve(data));

        }
    );

}

// ジェネレータ生成
function* fileReadAndWrite() {

    const data = yield Promise.all(
        [readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]
    );

    yield writeFile('gAlld.txt', data[0] + data[1] + data[2]);

}

grun(fileReadAndWrite);
