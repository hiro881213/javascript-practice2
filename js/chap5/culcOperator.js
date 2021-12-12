function culcOperator () {
    
    console.log("-----計算順-----")

    let x = 3;
    let y = 0;

    x += y = 6*5/2;

    console.log(x);

    console.log("-----等価演算子(プリニティブ)-----")

    const n = 5;
    const s = "5";

    console.log(n === s);
    console.log(n !== s);

    console.log(n === Number(s));
    console.log(n !== Number(s));

    console.log(n == s);
    console.log(n != s);

    console.log("-----等価演算子(オブジェクト)-----")

    const a = { name: "あるオブジェクト"};
    const b = { name: "あるオブジェクト"};

    console.log(a === b);
    console.log(a !== b);
    console.log(a == b);
    console.log(a != b);

    console.log("-----関係演算子-----")

    console.log(3 > 5);
    console.log(3 >= 5);
    
    console.log(3 < 5);
    console.log(3 <= 5);

    console.log(5 > 5);
    console.log(5 >= 5);

    console.log(5 < 5);
    console.log(5 <= 5);

    console.log("-----NaNについて-----")

    console.log(NaN === NaN);
    console.log(NaN == NaN);
    console.log(isNaN(NaN));
    console.log(isNaN(3));
    console.log(isNaN(3.6));
    console.log(isNaN("abc"));
 
    console.log("-----無限ループ回避-----")
    
    let xx = 0;

    while(true) {
        xx += 0.1
        console.log(xx);
        
        if (Math.abs(xx - 0.3) < Number.EPSILON) break;
        // if (xx === 0.3) break;

    }

    console.log(`${xx}で停止`);


}