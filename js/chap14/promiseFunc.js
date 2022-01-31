function promiseFunc() {
    {

        console.log('------Promise処理------');

        function countdown(seconds) {

            return new Promise((onFulfilled, onRejected) => {

                for (let i = seconds; i >= 0; i--){

                    setTimeout(() => {

                        if (i > 0) console.log(i + '...');
                        else onFulfilled(console.log('GO!'));
                        
                    }, (seconds - i)*1000);

                }

            })

        }

        countdown(5);

    }

    {

        console.log('------then関数の利用------');

        function countdown(seconds) {

            return new Promise((onFulfilled, onRejected) => {

                for (let i = seconds; i >= 0; i--) {

                    setTimeout(() => {

                        if (i > 0) console.log(i + '...');
                        else onFulfilled(onFulfilled(console.log('GO!')));

                    }, (seconds - i) * 1000);

                }

            });

        }

        countdown(5).then(
            () => console.log('カウントダウン成功'),
            (err) => console.log(`カウントダウンでエラーが起こった: ${err.message}`)
        )

        console.log('------catchハンドラ------');

        const p = countdown(10);

        p.then(
            ()=> console.log('カウントダウン成功')
        );
        
        p.catch((err) => console.log(`カウントダウンでエラーが起こった: ${err.message}`));

    }

}