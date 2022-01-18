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

}