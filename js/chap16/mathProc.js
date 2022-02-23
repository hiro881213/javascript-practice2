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

    }

    {

        console.log("------基数の指定------");

        const x = 12;

        // 10進数
        console.log(x.toString());

        // 10進数
        console.log(x.toString(10))

        // 16進数
        console.log(x.toString(16));

        // 8進数
        console.log(x.toString(8));

        // 2進数
        console.log(x.toString(2));

    }

    {

        console.log('------累乗------');
        
        console.log(Math.pow(2, 3));
        console.log(Math.pow(1.7, 2.3));
        
        console.log('------平方根------');
    
        console.log(Math.sqrt(16));
        console.log(Math.sqrt(15.5));
        
        console.log('------立方根------');

        console.log(Math.cbrt(27));
        console.log(Math.cbrt(22));

        console.log('------eの累乗------');

        console.log(Math.exp(1));
        console.log(Math.exp(5.5));

        console.log('------e^x-1の算出------');

        console.log(Math.expm1(1));
        console.log(Math.expm1(5.5));

        console.log('------和の平方根の算出------');

        console.log(Math.hypot(3, 4));
        console.log(Math.hypot(2, 3, 4));

    }

    {

        console.log('------自然対数の算出------');

        console.log(Math.log(Math.E));
        console.log(Math.log(17.5));

        console.log('------10を底とするxの対数------');

        console.log(Math.log10(10));
        console.log(Math.log10(16.7));

        console.log('------2を底とするxの対数------');

        console.log(Math.log2(2));
        console.log(Math.log2(5));

        console.log('------1+xの自然対数------');

        console.log(Math.log1p(Math.E - 1));
        console.log(Math.log1p(17.5));

    }

    {

        console.log('------絶対値------');

        console.log(Math.abs(-5.5));
        console.log(Math.abs(5.5));

        console.log('------sign------');

        console.log(Math.sign(-10.5));
        console.log(Math.sign(6.77));

        console.log('------ceil------');

        console.log(Math.ceil(2.2));
        console.log(Math.ceil(-3.8));

        console.log('------floor------');

        console.log(Math.floor(2.8));
        console.log(Math.floor(-3.2));

        console.log('------trunc------');

        console.log(Math.trunc(7.7));
        console.log(Math.trunc(-5.8));

        console.log('------round------');

        console.log(Math.round(7.2));
        console.log(Math.round(7.7));
        console.log(Math.round(-7.7));
        console.log(Math.round(-7.2));

        console.log('------min------');

        console.log(Math.min(1, 2));
        console.log(Math.min(3, 0.5, 0.66));
        console.log(Math.min(3, 0.5, -0.66));

        console.log('------max------');

        console.log(Math.max(1, 2));
        console.log(Math.max(3, 0.5, 0.66));
        console.log(Math.max(-3, 0.5, 0.66));

        console.log('------乱数------');
        console.log(Math.random());
        
        // 1~10
        console.log("1~10:" + (1 + (10 - 1) * Math.random()));
    
        // 10~15の整数
        console.log("10~15の整数:" + (10 + Math.floor((15 - 10) * Math.random())));

    }

    {

        console.log("------三角関数sin------");

        console.log("sin:" + Math.sin(Math.PI / 2));
        console.log("sin:" + Math.sin(Math.PI / 4));

        console.log("------三角関数cos------");

        console.log("cos:" + Math.cos(Math.PI));
        console.log("cos:" + Math.cos(Math.PI/4));

        console.log("------三角関数tan------");

        console.log("tan:" + Math.tan(Math.PI/4));
        console.log("tan:" + Math.tan(0));

        console.log("------三角関数asin------");

        console.log("asin:" + Math.asin(0));
        console.log("asin:" + Math.asin(Math.SQRT1_2));

        console.log("------三角関数acos------");

        console.log("acos:" + Math.acos(0));
        console.log("acos:" + Math.acos(Math.SQRT1_2));
    
        console.log("------三角関数atan------");

        console.log("atan:" + Math.atan(0));
        console.log("atan:" + Math.atan(Math.SQRT1_2));

        console.log("------三角関数atan2------");

        console.log("atan2:" + Math.atan2(0, 1));
        console.log("atan2:" + Math.atan2(1, 1));

        console.log("------ラジアン変換------");

        // ラジアン変換関数
        function deg2red(d) {
            return d / 180 * Math.PI;
        }

        console.log("45度→" + deg2red(45));

        console.log("------角度変換------");

        function red2deg(r) {
            return r / Math.PI * 180;
        }

        console.log("Math.PI/4→" + red2deg(Math.PI/4));

    }

    {

        console.log("------双曲正弦------");

        console.log(Math.sinh(0));
        console.log(Math.sinh(1));

        console.log("------双曲余弦------");

        console.log(Math.cosh(0));
        console.log(Math.cosh(1));

        console.log("------双曲正接------");

        console.log(Math.tanh(0));
        console.log(Math.tanh(1));

    }
}