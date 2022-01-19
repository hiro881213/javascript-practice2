function procException() {
    {

        console.log('------Errorオブジェクト------');

        // const email = "test@test.com";
        const email = "testtest.com";

        const validateEmail = ValidateEmail(email);

        if (validateEmail instanceof Error) {

            console.error(validateEmail.message);

        }  else {
            console.log(`正しい形式のアドレス: ${validateEmail}`);
        }

        // バリデーション関数
        function ValidateEmail(email) {
            return email.match(/@/) ?
                    email: new Error(`無効なメールアドレスです`)
        }

    }

    {

        console.log("------try~catch------");
    
        function ValidateEmail(email) {

            try {

                return email.match(/@/) ? email : new Error(`無効なメールアドレスです`);

            } catch (err) {

                console.error(`validateEmail: ${err.message}`);
                throw new Error('エラーが起こった');

            }

        }

        const email = 'AAAA@test.com';
        // const email = 'AAAA';
        // const email = null;

        try {
            
            const validatedEmail = ValidateEmail(email);

            console.log(validatedEmail);

            if (validatedEmail instanceof Error) {

                console.error(validatedEmail.message);

            } else { 
                
                console.log(`正しい形式のアドレス: ${validatedEmail}`);

            }

        } catch (err) {

            console.error(`エラー:${err.message}`);

        }

    }

    {

        console.log("------例外処理とコールスタック------");

        function a() {
            
            console.log('a: bを呼び出す前');
            b();
            console.log('a: 終了');

        }

        function b() {

            console.log('b: cを呼び出す前')
            c();
            console.log('b: 終了')
        
        }

        function c() {

            console.log('c: エラーをスローする');
            throw new Error('c Error');
            console.log('c: 終了');

        }

        function d() {

            console.log('d: cを呼び出す前');
            c();
            console.log('d: 終了');

        }

        try {

            a();

        } catch(err) {

            console.log("@@@@a呼び出し後のerr.stack@@@@");
            console.log(err.stack);
            console.log("@@@@終わり@@@@")

        }

        try {

            d();

        } catch (err) {

            console.log('@@@@d呼び出し後のerr.stack@@@@')
            console.log(err.stack);
            console.log('@@@@終わり@@@@');

        }

    }
    {

        console.log("------try~catch~finally------");

        try {

            console.log("一行目実行中...");

            throw new Error("エラー1");

            console.log("throwが実行されると、この行は実行されない...");

        } catch (err) {

            console.log("エラーが起こった...");

        } finally {

            console.log("finallyの中のこの行はいつも実行される");
            console.log("リソースの解放をここで行う");

        }

    }

}