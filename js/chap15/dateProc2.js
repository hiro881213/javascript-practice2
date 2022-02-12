function dateProc2() {
    
    console.log('------Dateオブジェクトの文字列化------');

    const d = new Date(Date.UTC(1930, 4, 10, 10, 0));

    // 1930/05/10
    console.log(d.toLocaleDateString());

    // 19:00:00
    console.log(d.toLocaleTimeString());

    // 19:00:00 GMT+0900 (日本標準時)
    console.log(d.toTimeString());

    // Sat, 10 May 1930 10:00:00 GMT
    console.log(d.toUTCString());

}