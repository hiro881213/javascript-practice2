function callFunction() {

    console.log("------無名関数------");
    
    const g = function f(stop) {

        if (stop) {

            console.log('停止');
            return;

        } else {

            console.log('fは停止していない');
            f(true);

        }

    }

    g(false);
    
    console.log("------アロー関数------");
    
    const o = {
        name : 'Julie',
        greetBackwards: function() {

            const getReverseName = () => {
                let nameBackwards = '';

                for (let i = this.name.length - 1; i >= 0; i--) {
                    nameBackwards += this.name[i];
                }

                return nameBackwards;

            }

            return `${getReverseName()} si eman ym , olleH`;

        },

    };

    console.log(o.greetBackwards());

    console.log("------Call------");

    const bruce = { name : "ブルース"};
    let wanwan = { name : "ワンワン"};
    
    function greet() {
        return `私は${this.name}です`;
    }

    console.log(greet());
    console.log(greet.call(bruce));
    console.log(greet.call(wanwan));

    console.log("------Call(オブジェクト書き換え)------");

    // オブジェクト更新関数
    function update(birthYear, occupation) {

        this.birth  = birthYear;
        this.career = occupation;

    }

    // オブジェクトの項目を書き換える
    update.call(wanwan, 1988, "Scientist");

    console.log(wanwan);

    console.log("------Apply------");

    wanwan = { name : "ワンワン"};

    // Applyでオブジェクトを書き換える
    update.apply(wanwan, [1988, "Engineer"]);

    console.log(wanwan);
}   