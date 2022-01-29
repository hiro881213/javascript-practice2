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
}