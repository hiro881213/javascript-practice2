function scopeFunction() {

    function f1() {
        console.log("f1");
    }
    
    function f2() {
        console.log("f2");
    }
    
    console.log("------静的スコープ------");

    f2();
    f1();
    f2();

    console.log("------静的スコープ2------");

    const x = 3;
    const y = 5;

    function f3() {

        console.log(x);
        console.log(y);

    }

    f3();

    console.log("------グローバルスコープ------");

    let name = 'ワンワン';
    let age = 33;

    function greet() {

        console.log(`こんにちは${name}さん`);
    
    }

    function getBirthYear() {
        return new Date().getFullYear() - age;
    }

    greet();
    console.log(getBirthYear());

}

