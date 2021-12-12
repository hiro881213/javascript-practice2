function omitOperator() {
    
    console.log("-----テンプレートリテラル-----");

    const roomTempC = 26.5;
    let currentTempC = 34.5;

    console.log(`室温と気温の差:${currentTempC - roomTempC}度`);
    console.log(`現在の温度(華氏): ${currentTempC*9/5 + 32}F`);

    console.log("-----ifelseの省略-----");

    // 素数抽出
    function isPrime(n) {
        
        if (n === 2) return true;
        
        for (let i = 2; i < n; i++) {
        
            if (n % i === 0) return false;
        
        }
        
        return true;
    
    }

    let label;
    n = 10;
    nn = 1;

    label = isPrime(n) ? '素数': '非素数';
    console.log(label);

    label = isPrime(nn) ? '素数': '非素数';
    console.log(label);

    console.log("-----短絡論理OR-----");

    let options;
    options = options || {};
    console.log(options);

}