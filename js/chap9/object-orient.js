function objectOrient () {

    {

        console.log("------for...in------");

        const SYM = Symbol();

        const o = {a: 1, b: 2, c: 3, [SYM]: 4};

        for (let prop in o) {

            if (!o.hasOwnProperty(prop)) continue;
            console.log(`${prop} : ${o[prop]}`);

        }

        console.log("----");

        const o2 = {a: 1, b: 2, c: 3, SYM: 4};

        console.log(o2.SYM);
        console.log(o2["SYM"]);
        console.log(o2[SYM]);   // 値が取得できない

        console.log("----");

        const o3 = {a: 1, b: 2, c: 3};
        
        o3[SYM] = 4;

        console.log(o3.SYM);    // 値が取得できない
        console.log(o3["SYM"]); // 値が取得できない
        console.log(o3[SYM]);

    }

    {

        console.log("------Object.keys------")

        const SYM = Symbol();

        const o = {a: 1, b: 2, c: 3, [SYM]: 4};
        const propArray = Object.keys(o);
        console.log(propArray);

        console.log("----");

        propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));

    }

    {

        console.log("------Object.keysとfilter------");

        const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};

        Object.keys(o)
                .filter(prop => prop.match(/^x/))
                .forEach(prop => console.log(`${prop}: ${o[prop]}`));

    }

    {

        console.log("------オブジェクト指向プログラミング------");

        // Carクラスを定義する
        class Car {
            constructor() {}
        }

        const car1 = new Car();
        const car2 = new Car();

        console.log(car1 instanceof Car);
        console.log(car2 instanceof Car);
        console.log(car1 instanceof Array);

    }

    {

        console.log("------クラスオブジェクトの利用------");

        class Car {

            constructor(make, model) {

                // メーカー
                this.make = make;

                // モデル
                this.model = model;

                // ギア
                this.userGears = ['P', 'N', 'R', 'D'];

                // ギア設定
                this.userGear = this.userGears[0];

            }
            
            // シフト
            shift(gear) {
                
                if (this.userGears.indexOf(gear) < 0) {
                    throw new Error(`ギア指定が正しくない:${gear}`);
                }

                this.userGear = gear;
            }

        }
    
        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");

        console.log(car1);
        console.log(car2);
        
        car1.shift('D');
        car2.shift('R');

        console.log(car1.userGear);
        console.log(car2.userGear);

    }

    {

        console.log("------アクセッサプロパティ------");

        class Car {

            // コンストラクタを定義する
            constructor(make, model) {

                // メーカー
                this.make = make;
                
                // モデル
                this.model = model;
                
                // ギア
                this._userGears = ['P', 'N', 'R', 'D'];

                // 選択ギア
                this._userGear = this._userGears[0];

            }

            get userGear() { return this._userGear; }

            set userGear(value) {

                if (this._userGears.indexOf(value) < 0)
                    throw new Error(`ギア指定が正しくない: ${value}`);

                this._userGear = value;
            
            }

            shift(gear) { this.userGear = gear; }

        }

        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");

        console.log(car1);
        console.log(car2);
        
        car1.shift('D');
        car2.shift('R');

        console.log(car1.userGear);
        console.log(car2.userGear);

        // car1.userGear = "X";

    }

    {

        console.log("------即時関数とインスタンス------");

        const Car = (function() {

            const carProps = new WeakMap();

            class Car {

                constructor(make, model) {

                    // メーカー
                    this.make = make;

                    // モデル
                    this.model = model;

                    // ギア
                    this._userGears = ['P', 'N', 'R', 'D'];

                    carProps.set(this, {userGear: this._userGears[0] });

                }

                // ギア取得
                get userGear() { return carProps.get(this).userGear; }

                // ギア設定
                set userGear(value) {

                    if (this._userGears.indexOf(value) < 0)
                        throw new Error(`ギア指定が正しくない: ${value}`);

                    carProps.get(this).userGear = value;

                }

                shift(gear) { this.userGear = gear; }

            }

            return Car;

        })();

        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");

        console.log(car1);
        console.log(car2);

        car1.shift('D');
        car2.shift('R');

        console.log(car1.userGear);
        console.log(car2.userGear);


        // ギアを設定する
        car1.userGear = "N";
        console.log(car1.userGear);

        // car1.userGear = "X";

    }

}