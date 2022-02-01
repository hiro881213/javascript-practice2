const fs = require('fs');

// ファイル読み込み処理
function readFile(fileName) {

    return new Promise(
        (onFulfilled, onRejected) => {

            fs.readFile(fileName, "utf-8", (err, data) => {

                if (err){
                    onRejected(err);
                }

                onFulfilled(data);

            });

        }
    );

}

// ファイル書き出し処理
function writeFile(fileName, data) {

    return new Promise(

        (onFulfilled, onRejected) => {

            fs.writeFile(fileName, data, err => {

                if (err) {

                    onRejected(err);

                }

                onFulfilled("OK");

            });

        }

    );

}

let allData = "";

readFile("a.txt").then((fileData) => {

    allData += fileData;
    return readFile("b.txt");

}).then((fileData) => {

    allData += fileData;
    return readFile("c.txt");

}).then((fileData) => {

    allData += fileData;
    return writeFile("dd.txt", allData);

}).then((mes) => {

    console.log("ファイルの合体に成功しました");

}).catch(err => {

    console.log(`エラーが起こりました: ${err}`);

});

