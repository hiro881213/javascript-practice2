function dateProc2() {
    
    console.log('------Dateオブジェクトの時分秒取得------');

    const d = new Date(Date.UTC(1815, 9, 10));

    // 1815
    console.log(d.getFullYear());

    // 9
    console.log(d.getMonth());

    // 10
    console.log(d.getDate());

    // 2
    console.log(d.getDay());

    // 9
    console.log(d.getHours());

    // 18
    console.log(d.getMinutes());

    // 59
    console.log(d.getSeconds());

    // 0
    console.log(d.getMilliseconds());

    console.log('------UTCの時分秒取得------');

    // 1815
    console.log(d.getUTCFullYear());

    // 9(→10月)
    console.log(d.getUTCMonth());

    // 10
    console.log(d.getUTCDate());

    // 2(→火曜日)
    console.log(d.getUTCDay());

    // 0
    console.log(d.getUTCHours());

    // 0
    console.log(d.getUTCMinutes());

    // 0
    console.log(d.getUTCSeconds());

    // 0
    console.log(d.getUTCMilliseconds());

}