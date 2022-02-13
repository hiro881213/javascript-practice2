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

}