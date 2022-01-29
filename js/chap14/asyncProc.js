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

}