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

    console.log("------グローバルスコープ2------");

    let user = {
        name: 'ワンワン',
        age: 33
    };

    function greet2(person) {
        console.log(`${person.name}だぞ！！`);
    }

    function getBirthYear2(person) {
        return new Date().getFullYear() - person.age;
    }

    greet2(user);
    console.log(getBirthYear2(user));

    console.log("------ブロックスコープ------");

    console.log("ブロックの前");

    {
        console.log("ブロックの中");
        const bx = 3;
        console.log(bx);
    }

    console.log("ブロックの外");

//    console.log(bx);

    console.log("------変数の隠蔽------");

    // ブロック1
    {
        const bx = '青';
        console.log(bx);
    }

    console.log(typeof bx);

    // ブロック2
    {
        const bx = 3;
        console.log(bx);
    }

    console.log(typeof bx);

    console.log("------入れ子のブロックスコープ------");

    /* 外側ブロック */
    {
        let x = '青';
        console.log(x);

        /* 内側ブロック */
        {
            let x = 100;
            console.log(x);
        }

        console.log(x);

    }

    console.log(typeof x);

}

