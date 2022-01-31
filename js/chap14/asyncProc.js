function asyncProc() {
    {

        console.log("------コールバック------");

        console.log("setTimeoutの前:" + new Date());
        
        function f() {

            console.log("これは関数fの中:" + new Date());

        }

        setTimeout(f, 10 * 10);
        
        console.log("setTimeoutの後");
        console.log("これもsetTimeoutの後");

    }

    {

        console.log("------コールバック[無名関数]------");

        setTimeout(
            function() {
                console.log("setTimeoutに指定された無名関数の中:" + new Date());
            },
            10 * 100
        );

        console.log("setTimeoutの後");

    }

    {

        console.log("------コールバック[アロー関数]------");

        console.log("setTimeoutの前:" + new Date());
        
        setTimeout(() => console.log("アロー関数の中:" + new Date()), 10 * 100);

    }

    {

        console.log("------setIntervalとclearInterval------");

        const start = new Date()
        
        let i = 0;

        const intervalId = setInterval(() => {

            // 現在の時刻
            let now = new Date();

            if (now.getMinutes() !== start.getMinutes() || ++i > 10)
                return clearInterval(intervalId);

            console.log(`${i}: ${now}`);
        }, 5*1000);
        
    }

}