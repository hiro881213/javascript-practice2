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

    let aa = (typeof undefined);
    console.log(typeof aa);
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

    console.log("-----分割代入----");

    const obj = {b: 2, c: 3, d: 4};

    // 分割代入
    const {a, b, c} = obj;

    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(d);

    console.log("-----分割代入2----");

    const obj2 = {b2: 2, c2: 3, d2: 4};

    let b2, c2, d2;

    // 分割代入(括弧で囲む必要がある)
    ({a2, b2, c2} = obj2);

    console.log(a2);
    console.log(b2);
    console.log(c2);

    console.log("-----分割代入-配列----");

    const arr = [1, 2, 3];
    let [x, y] = arr;

    console.log(x);
    console.log(y);

    console.log("-----分割代入-配列2----");

    const arr2 = [1, 2, 3, 4, 5];
    let [x2, y2, ...rest] = arr2;

    console.log(x2);
    console.log(y2);
    console.log(rest);

    console.log("-----分割代入-配列3----");

    let aaa = 5, bbb = 10;
    [aaa, bbb] = [bbb, aaa];

    console.log(aaa);
    console.log(bbb);

}