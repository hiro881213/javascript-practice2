const fs = require('fs');

function writeFile(fileName, data) {

    return new Promise((onFulfilled, onRejected) => {

        fs.writeFile(fileName, data, (err) => {

            err ? onRejected(err) : onFulfilled('OK');

        });

    });

}

// ファイル読み込み処理
function readFile(fileName) {

    return new Promise((onFulfilled, onRejected) => {

        const period = Math.random() * 1000;
        console.log(`${fileName}: ${period}`);

        setTimeout(() => {

            fs.readFile(fileName, "utf-8", (err, data) => {

                err ? onRejected(err) : onFulfilled([fileName, data]);

            });

        }, period);

    });

}

// 3つのファイル読み込みを同時に行い、最初に返って来たものを採用
let selected;

Promise.race([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
    .then((results) => {

        selected = results[0];
        return writeFile("dddd.txt", results[1]);

    })
    .then((mes) => {

        console.log(`ファイル${selected}の内容が書き込まれました`);

    })
    .catch(err => {

        console.error(`エラーが起こりました: ${err}`);
    
    });
