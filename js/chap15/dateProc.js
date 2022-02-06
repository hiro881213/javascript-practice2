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

        // Dateインスタンスを生成する
        let d = new Date();

        console.log(d);

        // 2017/01/01 00:00:00
        d = new Date(2017, 0);
        console.log(d);

        // 2017/02/01 00:00:00
        d = new Date(2017, 1);
        console.log(d);


    }
}