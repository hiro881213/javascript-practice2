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

}
