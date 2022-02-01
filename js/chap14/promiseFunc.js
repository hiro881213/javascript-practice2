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

    {
        
        console.log('------エラーの発生------');

        function countdown(seconds) {

            return new Promise((onFulfilled, onRejected) => {

                const timeoutIds = [];

                for (let i = seconds; i>= 0; i--) {

                    timeoutIds.push(setTimeout(() => {

                        if ( i === 13 ) {

                            timeoutIds.forEach(clearTimeout);
                            
                            // エラー関数を読み込む
                            onRejected(new Error(`${i}という数字は不吉です`));
    
                        } else if (i > 0) {
    
                            console.log(i + '...');
    
                        } else {
    
                            console.log('GO!');
                            
                            // 成功関数を読み込む
                            onFulfilled();
    
                        }
    

                    },(seconds - i) * 1000));

                }

            });

        }

        countdown(15).then(
            () => console.log('カウントダウン成功'),
            (err) => console.log(`カウントダウンでエラーが起こった: ${err.message}`)
        );

    }

    {

        console.log('------プロミスのチェイニング------');

        function countdown(seconds) {

            return new Promise((onFulfilled, onRejected) => {

                const timeoutIds = [];

                for (let i = seconds; i >= 0; i--){

                    timeoutIds.push(setTimeout(() => {

                        if (i === 13) {

                            // すべてクリア
                            timeoutIds.forEach(clearTimeout);

                            return onRejected(new Error(`${i}という数は不吉過ぎます`));

                        }

                        if (i > 0) console.log(i + '...');
                        else onFulfilled(console.log('GO!!'));

                    }, (seconds - i) * 1000));

                }

            })

        }

        function launch() {

            return new Promise ((onFulfilled, onRejected)=> {

                console.log('発射');

                setTimeout(() => {

                    onFulfilled('周回軌道に乗った');

                }, 2 * 1000);

            });

        }

        countdown(15)
            .then(launch)
            .then((msg) => {
                console.log(msg)
            })
            .catch((err) => {

                console.error('トラブル発生')

            });


    }

}