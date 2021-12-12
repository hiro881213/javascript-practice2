function logicOperator() {
    
    console.log("----文字列連結----");
    console.log(3 + 5 + "8");
    console.log("3" + 5 + 8);

    console.log("----論理値----");

    // undefined
    if (undefined) console.log("t"); else console.log("f");

    // null
    if (null) console.log("t"); else console.log("f");

    // 0
    if (0) console.log("t"); else console.log("f");

    // NaN
    if (NaN) console.log("t"); else console.log("f");

    // ''
    if ('') console.log("t"); else console.log("f");

    console.log("----論理値2----");

    const obj1 = {};

    if (obj1) console.log("t"); else console.log("f");

    const arr = [];

    if (arr) console.log("t"); else console.log("f");
    if (' ') console.log("t"); else console.log("f");
    if ('false') console.log("t"); else console.log("f");

    console.log("----短絡評価----");

    const skipIt = true;
    const skipIt2 = false;

    let x = 0;

    const result = skipIt || x++;
    const result2 = skipIt2 || x++;

    console.log(result);
    console.log(result2);

    const result3 = skipIt && x++;
    const result4 = skipIt2 && x++;

    console.log(result3);
    console.log(result4);

    console.log("----短絡評価2----");

    let suppliedOptions;

    let options = suppliedOptions || {name: "デフォルト"};
    console.log(options);

    suppliedOptions = null;
    
    options = suppliedOptions || {name: "デフォルト"};
    console.log(options);

    suppliedOptions = {name: "xxx"};
    options = suppliedOptions || {name: "デフォルト"};
    console.log(options);

    console.log("----カンマ演算子----");

    let a = 0, b = 10, z;
    z = (a++, b++);
    console.log(z);

    z = a++, b++;
    console.log(z);

    console.log("----ビット化----");

    function formatBinary(x) {

        // 2進数表記にする
        const y = x.toString(2);

        return ("0000" + y).substr(-4);

    }

    const FLAG_READ = 1;
    const FLAG_WRITE = 2;
    const FLAG_EXECUTE = 4;

    console.log(formatBinary(FLAG_READ));
    console.log(formatBinary(FLAG_WRITE));
    console.log(formatBinary(FLAG_EXECUTE));

    // OR演算
    console.log(formatBinary(FLAG_READ | FLAG_WRITE));






}