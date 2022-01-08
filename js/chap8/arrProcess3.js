function arrProcess3() {

    {
        console.log("------someメソッド------");

        const arr = [5, 7, 12, 15, 17];

        console.log(arr.some(x => x%2 === 0));
        console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));
    }

    {

        console.log("------every------");

        const arr = [4, 6, 16, 36];

        console.log(arr.every(x => x%2 === 0));
        console.log(arr.every(x => Number.isInteger(Math.sqrt(x))));

    }

    {
        console.log("------mapメソッド------");

        const cart = [
            {name : "iPhone", price : 54800},
            {name : "Android",price : 49800}
        ];

        // 各オブジェクトのnameからなる配列を作る
        const names = cart.map(x => x.name);
        console.log(names);

        const prices = cart.map(x => x.price);
        console.log(prices);

        const discountPrices = prices.map(x => x*0.8);
        console.log(discountPrices);

        const lcNames = names.map(x => x.toLowerCase());
        console.log(lcNames);

    }

    {
        console.log("------mapと添字------");
    
        const items = ["iPhone", "Android"];
        const prices= [54800, 49800];

        const cart = items.map((x, i) => ({name: x, price: prices[i]}));
        console.log(cart);

    }

    {
        console.log("------Filterメソッド------");

        const cards = [];

        for (let mark of ['hart', 'clover', 'dia', 'spade']) {
        
            for (let number = 1; number <= 13; number++) {
        
                cards.push({mark, number});
        
            }
        
        }

        let selCard = cards.filter(card => card.number === 2);
        console.log(selCard);

        selCard = cards.filter(card => card.mark === 'dia');
        console.log(selCard);

        selCard = cards.filter(card => card.number > 10);
        console.log(selCard);

        selCard = cards.filter(card => card.number > 10 && card.mark == 'hart');
        console.log(selCard);

    }

    {
        console.log("------mapとfilter------");

        function changeSynbol(card) {

            // マーク
            const mark = {
                "heart" : "♡",
                "clover": "☘",
                "dia"   : "♢",
                "spade" : "♤"
            };

            // 文字記号
            const valAJQK = {
                1 : 'A',
                11: 'J',
                12: 'Q',
                13: 'K'
            };

            for (let i = 2; i <= 10; i++) valAJQK[i] = i;
            return mark[card.mark] + valAJQK[card.num];

        }

        const cards = [];
        
        for (let mark of ["heart", "clover", "dia", "spade"])
            for (let num = 1; num <= 13; num++)
                cards.push({mark, num});
        
        let selCard = cards.filter(card => card.num === 2).map(changeSynbol)
        console.log(selCard);

        selCard = cards.filter(card => card.mark === 'dia').map(changeSynbol);
        console.log(selCard);

        selCard = cards.filter(card => card.num > 10 && card.mark === 'heart');
        console.log(selCard);

    }

    {
        console.log("------reduceメソッド------");

        const arr = [5, 7, 2, 4];
        
        const sum = arr.reduce((a, x) => a += x, 0);
        console.log(sum);

        const sum2 = arr.reduce((a, x) => a + x, 0);
        console.log(sum2);

    }

    {

        console.log("------reduceメソッド2------");

        // 配列を生成する
        const arr = [5, 7, 2, 4];

        const sum = arr.reduce((a, x) => a += x);
        console.log(sum);

        const sum2 = arr.reduce((a, x) => a + x);
        console.log(sum2);

    }

    {

        console.log("------文字列のreduceメソッド------");

        // 文字列配列を生成する
        const words = [
            "Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone",
            "November", "Chocolate", "Papaya", "Uniform", "Joker",
            "Clover", "Bali"
        ];

        const alphabetical = words.reduce((a, x) => {

            if (!a[x[0]]) a[x[0]] = [];
            a[x[0]].push(x);

            return a;

        }, {} );

        console.log(alphabetical);

    }

    {

        console.log("------平均と標準偏差のreduceメソッド------");

        // 数値
        const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];

        const stats = data.reduce((a, x) => {

            a.N++;

            let delta = x - a.mean;

            a.mean += delta / a.N;
            a.M2 += delta*(x - a.mean);

            return a;

        }, {N: 0, mean: 0, M2: 0});

        if (stats.N > 2) {

            stats.variance = stats.M2 / (stats.N - 1);
            stats.stdev = Math.sqrt(stats.variance);

        }

        console.log(stats);

    }

}