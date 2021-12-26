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

}
