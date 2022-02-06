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


    }
}