function procException() {
    {

        console.log('Errorオブジェクト');

        // バリデーション関数
        function validateEmail(email) {
            return email.match(/@/) ?
                    email: new Error(`無効なメールアドレスです`)
        }

    }
}