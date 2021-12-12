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

}