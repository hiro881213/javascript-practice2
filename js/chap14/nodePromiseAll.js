'use strict'

const fs = require('fs');

// ファイル読み込み処理
function readFile(fileName) {

    return new Promise((resolve, reject) => {

        fs.readFile(fileName, "utf-8", (err, data) => {

            err ? reject(err) : resolve(data);

        });

    });

}

// ファイル書き出し処理
function writeFile(fileName, data) {

    return new Promise((resolve, reject) => {

        fs.writeFile(fileName, data, err => {

            err ? reject(err) : resolve("OK");

        });

    });

}

// 3ファイル同時読み込み処理
Promise.all([ readFile("a.txt"), readFile("b.txt"), readFile("c.txt") ])
    .then((results) => {

        const allData = results[0] + results[1] + results[2];

        return writeFile("ddd.txt", allData);

    }).then((mes) => {

        console.log("ファイルの合体に成功しました");

    }).catch((err) => {

        console.log(`エラーが起こりました:${err}`)

    });
