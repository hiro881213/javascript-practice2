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

    {

        console.log('------精度の指定------');

        let x = 1000;

        // 1000.0
        console.log(x.toPrecision(5));

        // 1000
        console.log(x.toPrecision(4));

        // 1.00e+3
        console.log(x.toPrecision(3));

        // 1.0e+3
        console.log(x.toPrecision(2));

        // 1e+3
        console.log(x.toPrecision(1));

        console.log('=====');

        x = 15.335;

        // 15.3350
        console.log(x.toPrecision(6));

        // 15.335
        console.log(x.toPrecision(5));

        // 15.34
        console.log(x.toPrecision(4));

        // 15.3
        console.log(x.toPrecision(3));

        // 15
        console.log(x.toPrecision(2));
        
        // 2e+1
        console.log(x.toPrecision(1));

        alert('');

    }

}