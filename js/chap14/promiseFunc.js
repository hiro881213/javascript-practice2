function promiseFunc() {
    {

        console.log('------Promise処理------');

        function countdown(seconds) {

            return new Promise((onFulfilled, onRejected) => {

                for (let i = seconds; i >= 0; i--){

                    setTimeout(() => {

                        if (i > 0) console.log(i + '...');
                        else onFulfilled(console.log('GO!'));
                        

                    });

                }

            })

        }

        countdown(5);

    }

}