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

    }
}
