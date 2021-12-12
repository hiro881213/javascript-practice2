function omitOperator() {
    
    console.log("-----テンプレートリテラル-----");

    const roomTempC = 26.5;
    let currentTempC = 34.5;

    console.log(`室温と気温の差:${currentTempC - roomTempC}度`);
    console.log(`現在の温度(華氏): ${currentTempC*9/5 + 32}F`);

}