function objectOrient3() {
    {

        console.log("------多重継承とミックスイン生成------");

        class Car {
            constructor() {}
        }

        class InsurancePolicy {}

        function makeInsurable(o) {

            o.addInsurancePolicy = (p) => {
                this.insurancePolicy = p;
            };

            o.getInsurancePolicy = () => {
                return this.insurancePolicy;
            }

            o.isInsured = () => {
                return !!this.insurancePolicy;
            }

        }

        console.log("------多重継承とミックスイン呼び出し------");

        const car1 = new Car();
        
        makeInsurable(car1);
        console.log(car1.isInsured());

        car1.addInsurancePolicy(new InsurancePolicy());
        console.log(car1.isInsured());

        console.log("------多重継承とミックスイン呼び出し2------");

        const car2 = new Car();

        makeInsurable(car2);
        console.log(car2.isInsured());

        car2.addInsurancePolicy(new InsurancePolicy());
        console.log(car2.isInsured());

    }

    {

        console.log("------多重継承とミックスイン生成2------");

        class Car {
            constructor(){}
        }

        class InsurancePolicy {}

        function makeInsurable(o) {

            o.addInsurancePolicy = (p) => {
                this.insurancePolicy = p;
            }

            o.getInsurancePolicy = () => {
                return this.insurancePolicy;
            }

            o.isInsured = () => {
                return !!this.insurancePolicy;
            }

        }

        makeInsurable(Car.prototype);

        const car1 = new Car();
        console.log(car1.isInsured());

        car1.addInsurancePolicy(new InsurancePolicy());
        console.log(car1.isInsured());

        const car2 = new Car();
        console.log(car2.isInsured());

        car2.addInsurancePolicy(new InsurancePolicy());
        console.log(car2.isInsured())

    }
    {
        console.log("------シンボルとミックスイン------");

        // Carクラス
        class Car {
            constructor() {}
        }

        // 保険クラス
        class InsurancePolicy {}

        const ADD_POLICY = Symbol();
        const GET_POLICY = Symbol();
        const IS_INSURED = Symbol();
        const _POLICY    = Symbol();

        function makeInsurable(o) {

            o[ADD_POLICY] = (p) => {
                this[_POLICY] = p;
            };

            o[GET_POLICY] = () => {
                return this[_POLICY];
            };

            o[IS_INSURED] = () => {
                return !!this[_POLICY];
            };

        }

        makeInsurable(Car.prototype);

        const car1 = new Car();
        console.log(car1[IS_INSURED]());

        car1[ADD_POLICY](new InsurancePolicy());
        console.log(car1[IS_INSURED]());

        const car2 = new Car();
        console.log(car2[IS_INSURED]());

        car2[ADD_POLICY](new InsurancePolicy());
        console.log(car2[IS_INSURED]());

    }
}
