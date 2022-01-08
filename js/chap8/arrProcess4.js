function arrProcess4() {

    {

        console.log("------文字列のreduceメソッド------");

        const words = [
            "BeachBall", "Rodeo", "Angel", "Aardvark", "Xylophone", "November",
            "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"
        ];

        const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();

        console.log(longWords);

    }

    {
        
        console.log("------Joinメソッド------");

        const arr = [1, null, "hello", "world", true, undefined];

        // arr[3]を削除する
        delete arr[3];

        // joinメソッドを実行する
        let result = arr.join();
        console.log(result);

        result = arr.join('');
        console.log(result);

        result = arr.join(" -- ");
        console.log(result);

    }
}
