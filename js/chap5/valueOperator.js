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

}