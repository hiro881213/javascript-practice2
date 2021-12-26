function scopeFunction2() {
    
    console.log("------クロージャー------");

    // グローバル関数
    let globalFunc;

    // ブロックスコープ
    {
        // ブロックスコープの変数
        let blockVar = 'a';

        globalFunc = function () {
            console.log(blockVar);
        }

    }

    globalFunc();

    console.log("------クロージャー2------");

    let f;

    {
        let o = {
            note: '安全',
            note2:'大丈夫'
        };

        f = function() {
            console.log("無形関数の中:" + o.note);
            return o;
        }

    }

    let oRef = f();

    console.log(oRef);

    oRef.note = "大丈夫ではない";
    console.log(oRef);

}
