function procException() {
    {

        console.log('Errorオブジェクト');

        const email = "test@test.com";

        const validateEmail = ValidateEmail(email);

        if (validateEmail instanceof Error) {

            console.log(validateEmail.message);

        }  else {
            console.log(`正しい形式のアドレス: ${validateEmail}`);
        }

        // バリデーション関数
        function ValidateEmail(email) {
            return email.match(/@/) ?
                    email: new Error(`無効なメールアドレスです`)
        }


    }
}