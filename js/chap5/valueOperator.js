function valueOperator() {
    
    console.log("-----条件演算子----");

    const doIt = false;
    const result = doIt ? "Did it!" : "Didn't do it";

    console.log(result);

    console.log("-----typeof演算子----");

    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof true);
    console.log(typeof 1);
    console.log(typeof "");
    console.log(typeof Symbol());
    console.log(typeof function(){});

    console.log("-----typeof演算子(変数)----");

    let a = (typeof undefined);
    console.log(typeof a);
    console.log(void 1);

    console.log("-----代入演算子----");

    let v,v0;
    v = v0 = 9.8;

    console.log(v);
    console.log(v0);

    console.log("-----代入演算子-配列----");

    const nums = [3, 5, 15, 7, 5];

    let n, i = 0;

    while (i < nums.length && (n = nums[i++]) < 10) {

        console.log(`10より小さい数字を発見:${n}`);

    }

    console.log(`10より小さい数字を発見:${n}`);
    console.log(`未チェックの数字の個数:${nums.length - i}`);
}