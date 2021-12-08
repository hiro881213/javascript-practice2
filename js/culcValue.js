function culcValue() {
    // --------------------------------------
    // 文字結合、計算
    // --------------------------------------

    console.log("----計算・文字結合----");

    const s = "5";

    // +sにより数値として扱われる
    console.log(3 + +s);

    // 文字列の連結となる
    console.log(3 + s);

    // --------------------------------------
    // 乗算
    // --------------------------------------

    console.log("----乗算----");

    const x1 = 0;
    const x2 = 3;
    const x3 = -1.5;
    const x4 = -6.33;

    console.log(-x1*1);
    console.log(+x2*2);
    console.log(+x3*3);
    console.log(-x4*4);

    // --------------------------------------
    // 剰余
    // --------------------------------------

    console.log("----剰余----");
    console.log(10 % 3);
    console.log(-10 % 3);
    console.log(-10 % 4);
    console.log(10 % -3);
    console.log(10 % -4);
    console.log(10 % 3.6);
    console.log(10 % 2.5);

}