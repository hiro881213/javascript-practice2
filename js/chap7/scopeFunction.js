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

}

