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
}