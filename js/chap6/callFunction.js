function callFunction() {

    console.log("------無名関数------");
    
    const g = function f(stop) {

        if (stop) {

            console.log('停止');
            return;

        } else {

            console.log('fは停止していない');
            f(true);

        }

    }

    g(false);

}