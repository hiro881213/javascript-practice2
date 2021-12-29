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

    console.log("------IIFE------");

    let oRef = f();

    console.log(oRef);

    oRef.note = "大丈夫ではない";
    console.log(oRef);

    const message = (function() {
        const secret = "私は秘密です！";
        return `秘密の長さは${secret.length}文字です。`
    })();

    console.log(message);

    console.log("------IIFE2------");

    const f2 = (function() {
        let count = 0;
        return function() {
            return `呼び出し回数:${++count}回`;
        }
    })();

    console.log(f2());
    console.log(f2());
    console.log(f2());

    console.log("------var変数------");

    console.log(x3);
    var x3 = 3;
    console.log(x3);

    console.log("------関数の巻き上げ------");

    f4();

    function f4() {
        console.log('関数f4が呼び出された');
    }

    console.log("------TDZ------");
    {
        if (typeof x === "undefined") {
            console.log("xは存在していない");
        } else {
            console.log("xは存在している");
        }

        var x;

    }

    // エラーがある
    // {
    //     if (typeof x === "undefined") {
    //         console.log("xは存在していない");
    //     } else {
    //         console.log("xは存在している");
    //     }

    //     let x;

    // }

}
