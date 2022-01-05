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

}