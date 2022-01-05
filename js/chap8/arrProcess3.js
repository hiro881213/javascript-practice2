function arrProcess3() {
    
    {
        console.log("------someメソッド------");

        const arr = [5, 7, 12, 15, 17];

        console.log(arr.some(x => x%2 === 0));
        console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));
    }

}