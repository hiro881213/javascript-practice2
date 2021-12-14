function argumentFunction() {
    
    console.log("-----平均計算処理------");

    // 平均計算関数
    function avg(a, b) {
        return (a + b) / 2;
    }

    console.log(avg(5, 10));

    console.log("-----関数呼び出し------");

    function f(x) {

        console.log(`関数fの中(代入の前): x = ${x}`);
        x = 5;
        console.log(`関数fの中(代入の後): x = ${x}`);

    }

    let x = 3;
    console.log(`関数fを呼び出す前:x = ${x}`);
    f(x);
    console.log(`関数fを呼び出した後:x = ${x}`);

    console.log("-----オブジェクト変更関数------");

    function f2(o) {

        console.log(`関数f2の中、o.messageに代入する前の値:${o.message}`);
        o.message = "messageの値を関数f2の中で設定した!!";
        console.log(`関数f2の中、o.messageに代入した後の値:${o.message}`);

    }

    let o = {
        message: "messageの初期値"
    };

    console.log(`関数f2を呼び出す前:o.message = ${o.message}`);
    f2(o);
    console.log(`関数f2を呼び出した後:o.message = ${o.message}`);

}