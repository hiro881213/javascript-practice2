function culcOperator () {
    
    console.log("-----計算順-----")

    let x = 3;
    let y = 0;

    x += y = 6*5/2;

    console.log(x);

    console.log("-----等価演算子-----")

    const n = 5;
    const s = "5";

    console.log(n === s);
    console.log(n !== s);

    console.log(n === Number(s));
    console.log(n !== Number(s));

    console.log(n == s);
    console.log(n != s);

}