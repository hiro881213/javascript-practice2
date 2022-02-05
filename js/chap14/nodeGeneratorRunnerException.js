const fs = require('fs');
const { resolve } = require('path/posix');

// ジェネレータランナー生成関数
function grun(g) {

    const it = g();

    (function iterate(val) {

        // イテレータを読み込む
        const x = it.next();

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

            // ファイルを読み込む
            fs.readFile(
                fileName, 
                'utf-8',
                (err, data) => err ? reject(err) : resolve(data));

        }

    );

}

// ファイル書き出し処理
function writeFile(fileName) {

    return new Promise(

        (resolve, reject) => {

            // ファイル書き出し処理
            fs.writeFile(
                fileName, 
                data,
                err => err ? reject(err) : resolve("OK"));

        }

    );

}

// ファイル読み込みジェネレータ
function* fileReadAndWrite() {

    try {

        // ファイル読み込みプロミス
        const data = yield Promise.all([
            readFile('a.txt'),
            readFile('b.txt'),
            readFile('c.txt')
        ]);

        // ファイル書き出し
        yield writeFile('catchD.txt', data[0] + data[1] + data[2]);

    } catch (err) {

        console.error(`エラーが起こりました: ${err}`);

    }

}

// ジェネレータランナーを実行する
grun(fileReadAndWrite);