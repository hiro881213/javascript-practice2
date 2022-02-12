function dateProc() {
    
    {

        console.log('------Date関数------');

        // Date関数を読み込む
        const d = new Date();

        console.log(d);

        console.log(d.valueOf());

    }


    {

        console.log('------Dateオブジェクトの生成------');

        function consoleFunc(str) {

            console.log(str);

        }

        // Dateインスタンスを生成する
        let d = new Date();

        console.log(d);

        // 2017/01/01 00:00:00
        consoleFunc(new Date(2017, 0));

        // 2017/02/01 00:00:00
        consoleFunc(new Date(2017, 1));

        // 2017/02/14 00:00:00
        consoleFunc(new Date(2017, 1,14));

        // 2017/02/14 13:00:00
        consoleFunc(new Date(2017, 1, 14, 13));

        // 2017/02/14 13:30:00
        consoleFunc(new Date(2017, 1, 14,13, 30));

        // 2017/02/14 13:30:05
        consoleFunc(new Date(2017, 1, 14, 13, 30, 5));

        // 2017/02/14 13:30:05:05
        consoleFunc(new Date(2017, 1, 14, 13, 30, 5, 500));

        console.log('------UNIXエポックから経過した時間------');

        // 1970/01/01 09:00:00
        consoleFunc(new Date(0));

        // 1970/01/01 09:00:01
        consoleFunc(new Date(1000));

        // 2016/05/16 17:00:00
        consoleFunc(new Date(1463443200000));

        console.log('------UNIXエポックから負の日時指定------');

        // 1969/01/01 09:00:00
        consoleFunc(new Date(-365 * 24 * 60 * 60 * 1000));

        console.log('------日時を表す文字列------');

        // 1903 01/14 00:00:00
        consoleFunc(new Date('June 14,1903'))

        // 1903 01/14 09:00:00
        consoleFunc(new Date('June 14 1903 GMT-0000'));

    }
    {

        console.log('------UTC日時------');

        const d = new Date(Date.UTC(2017, 1, 14));
        console.log(d);

    }

    {

        console.log('------日時の受け渡し------');

        // Dateオブジェクトを生成する
        const before = {
            d : new Date()
        };

        console.log(before.d);
        console.log(before.d instanceof Date);

        // JSONに変換する
        const json = JSON.stringify(before);
        console.log(json);

        // JSONをパースする
        const after = JSON.parse(json);
        console.log(after.d instanceof Date);
        console.log(typeof after.d);

        console.log('------JSONをDateに戻す------');

        console.log(after.d);
        after.d = new Date(after.d);

        console.log(after.d instanceof Date);
        console.log(after.d);

    }

    {

        console.log('------数値による引き渡し------');
        
        // Dateオブジェクト
        const before = {

            d: new Date().valueOf()

        };

        // UNIXエポックからのミリ秒数
        console.log(before.d);
        console.log(typeof before.d);

        // JSONに変換する
        const json = JSON.stringify(before);
        console.log(json);

        // JSONからの復元
        const after = JSON.parse(json);
        console.log(after);
        console.log(typeof after.d);

        // Date型を時刻に変換する
        const d = new Date(after.d);
        console.log(d);

    }

}