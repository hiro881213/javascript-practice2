function outFunction() {
    
    // コンソール出力関数
    function sayHello() {
        console.log("Hello World");
    }

    console.log("-----関数の実行------");

    sayHello();

    // 文字列出力関数
    function getGreeting() {
        return "Hello World!";
    }

    console.log("-----文字列出力------");

    const message = getGreeting();
    console.log(message);

    console.log("-----呼び出しと参照------");

    console.log(getGreeting());
    console.log(getGreeting);

    console.log("-----関数の代入------");

    const f = getGreeting;

    console.log(f);
    console.log(f());

    console.log("-----オブジェクトに関数を代入------");

    const o = {};
    o.f = getGreeting;
    console.log(o.f());

    console.log("-----配列に関数を代入------");

    const arr = [1, 2, 3];
    arr[1] = getGreeting;

    const message2 = arr[1]();

    console.log(message2);

}