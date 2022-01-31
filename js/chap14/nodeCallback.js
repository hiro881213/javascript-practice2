const fs = require('fs');

const fname = 'xxx';

fs.readFile(fname, (err, data) => {
    if (err)
        return console.error(`ファイル読み込み時のエラー${fname}: ${err.message}`);
        console.log(`ファイル${fname}の内容を表示します:¥n ${data}`);
});