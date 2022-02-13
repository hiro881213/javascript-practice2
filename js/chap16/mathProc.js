function mathProc() {
    
    {

        console.log('------固定小数点------');

        const x = 19.51;

        // 19.510
        console.log(x.toFixed(3));

        // 19.51
        console.log(x.toFixed(2));
        
        // 19.5
        console.log(x.toFixed(1));

        // 20
        console.log(x.toFixed(0));

    }
    {

        console.log('------指数表現------');

        const x = 3800.5;

        // 3.8005e+3
        console.log(x.toExponential(4));

        // 3.801e+3
        console.log(x.toExponential(3));

        // 3.80e+3
        console.log(x.toExponential(2));

        // 3.8e+3
        console.log(x.toExponential(1));

        // 4e+3
        console.log(x.toExponential(0));


    }
}