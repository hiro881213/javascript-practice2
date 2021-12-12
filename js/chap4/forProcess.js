function forProcess() {

    // 0埋め処理
    let s = '3';

    for (; s.length < 10; s = '0' + s);
    console.log(s);

    // 小数点を利用したfor文
    for (let x = 0.2; x < 3.0; x+= 0.2)
        console.log(x);

    // for inループ
    const player = {
        name: "Thomas",
        rank: "Midshipmal",
        age: 25
    };

    // オブジェクトのキーを全て取り出す
    for (prop in player) {

        if (!player.hasOwnProperty(prop)) continue;

        console.log(player[prop]);
    
    }

    // for ofループ
    const scores =[10, 30, 60, 77];

    for (let score of scores)
        console.log(score);

    // 素数抽出
    function isPrime(n) {
        
        if (n === 2) return true;
        
        for (let i = 2; i < n; i++) {
        
            if (n % i === 0) return false;
        
        }
        
        return true;
    
    }

    let bigArrayOfNumbers = [4, 6, 7, 8, 9];
    let i = 0;

    for (; i < bigArrayOfNumbers.length; i++)
        if (isPrime(bigArrayOfNumbers[i])) break;
    
    if (i === bigArrayOfNumbers.length) console.log("素数なし");
    else console.log(`最初の素数位置:${i} 素数の値: ${bigArrayOfNumbers[i]}`);

    // 素数削除処理
    i = 0;
    for (; i < bigArrayOfNumbers.length; i++)
        if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);

    console.log(bigArrayOfNumbers);

}