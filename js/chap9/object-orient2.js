function objectOrient2() {
    
    {

        console.log("------クラスと関数------")

        class Es2015Car {


            // コンストラクタを定義する
            constructor(make, model) {

                // メーカー
                this.make = make;

                // モデル
                this.model = model;

                // ギア一覧
                this._userGears = ['P', 'N', 'R', 'D'];

                // ギア
                this._userGear = this._userGears[0];

            }

            get userGear() { return this._userGear; };

            set userGear(value) {

                if (this._userGears.indexOf(value) < 0)
                    throw new Error(`ギア指定が正しくない: ${value}`);

                this._userGear = value;

            }

            shift(gear) { this.userGear = gear; }

        }

        function Es5Car(make, model) {

            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];

            this._userGear = this.userGears[0];

        }

        console.log(typeof Es2015Car);
        console.log(typeof Es5Car);

    }

    {

        console.log("------プロトタイプ------")

        const Car = (function() {

            const carProps = new WeakMap();

            // CARクラス
            class Car {

                // コンストラクタを定義する
                constructor(make, model) {

                    // メーカー
                    this.make = make;

                    // モデル
                    this.model = model;

                    // ギアの種類
                    this._userGears = ['P', 'N', 'R', 'D'];

                    // ギア
                    carProps.set(this, { userGear: this._userGears[0] });

                }

                // ギアのゲッター
                get userGear() { return carProps.get(this).userGear; };

                // ギアのセッター
                set userGear(value) {

                    if (this._userGears.indexOf(value) < 0)
                        throw new Error(`ギア指定が正しくない: ${value}`);

                    carProps.get(this).userGear = value;

                };

                shift (gear) { this.userGear = gear; };

            }

            return Car;

        })();

        const car1 = new Car();
        const car2 = new Car();

        console.log(car1.shift === Car.prototype.shift);
        console.log(car2.shift === car2.shift);

        car1.shift('D');
        console.log(car1.userGear);

    }

    {
        console.log("------静的メソッド------");

        class Car {

            static getNextVin() {

                return Car.nextVin++;

            }

            // コンストラクタ
            constructor(make, model) {

                this.make = make;
                this.model = model;
                this.vin = Car.getNextVin();

            }

            // インスタンスチェック処理
            static areSimilar(car1, car2) {

                return car1.make === car2.make && car1.model === car2.model;
            
            }

            // 車両番号チェック処理
            static areSame(car1, car2) {

                return car1.vin === car2.vin;
            
            }

        }

        Car.nextVin = 0;

        const car1 = new Car("Tesla", "Model S");
        const car2 = new Car("Mazda", "3i");
        const car3 = new Car("Mazda", "3i");

        console.log(car1.vin);
        console.log(car2.vin);
        console.log(car3.vin);

        console.log(Car.areSimilar(car1, car2));
        console.log(Car.areSimilar(car2, car3));

        console.log(Car.areSame(car2, car3));
        console.log(Car.areSame(car2, car2));

    }

    {
        console.log("------継承------");

        class Vehicle {

            constructor() {

                this.passengers = [];
                console.log("Vehicleが生成された");

            }

            addPassenger(p) {

                this.passengers.push(p);

            }

        }

        class Car extends Vehicle {

            constructor() {

                // スーパークラスのコンストラクタを呼び出す
                super();
                console.log("Carが生成された");

            }

            deployAirbags() {

                console.log("バーン!");

            }

        }

        const v = new Car();
        v.addPassenger("Wanwan");
        v.addPassenger("Wanko");
        
        console.log(v.passengers);

        const c = new Car();
        c.addPassenger("A");
        c.addPassenger("B");
        console.log(c.passengers);

        c.deployAirbags();

        class MotorCycle extends Vehicle {}

        const m = new MotorCycle();

        console.log(c instanceof Car);
        console.log(c instanceof Vehicle);

        console.log(m instanceof Car);
        console.log(m instanceof MotorCycle);
        console.log(m instanceof Vehicle);

    }
    {
        console.log("------継承2------");

        // スーパークラス
        class Vehicle {

            // コンストラクタ
            constructor() {

                this.passengers = [];
                console.log("Vehicleが生成された");
            
            }

            // 乗客を追加
            addPassenger(p) {
                
                this.passengers.push(p);

            }

        }

        // サブクラス
        class Car extends Vehicle {

            // コンストラクタ
            constructor() {

                // スーパークラスのコンストラクタを呼び出す
                super();
                console.log("Carが生成された");

            }

            // エアバッグを作動させる
            deployAirbags() {
                console.log("バーン!");
            }

        }

        const v = new Vehicle();

        v.addPassenger("太郎");
        v.addPassenger("花子")

        console.log(v.passengers);

        const c = new Car();

        c.addPassenger("圭子");
        c.addPassenger("ミドリ");

        console.log(c.passengers);

        c.deployAirbags();

        console.log("------ポリモーフィズム------");

        class MotorCycle extends Vehicle {}

        const c2 = new Car();
        const m = new MotorCycle();

        console.log(c instanceof Car);
        console.log(c instanceof Vehicle);

        console.log(m instanceof Car);
        console.log(m instanceof MotorCycle);
        console.log(m instanceof Vehicle);

    }

    {
        console.log("------プロパティの列挙------");

        // スーパークラスの定義
        class Super {

            // コンストラクタ
            constructor() {

                this.name = 'Super';
                this.isSuper = true;
            
            }

        }

        Super.prototype.sneaky = '非推奨!';

        // サブクラスの定義
        class Sub extends Super {

            constructor() {

                // スーパークラスのコンストラクタを呼び出す
                super();

                this.name = 'Sub';
                this.isSub = true;

            }

        }

        const obj = new Sub();

        for (let p in obj) {

            console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : '(継承)'));

        }

    }

}