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

    }
}
