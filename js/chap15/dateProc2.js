function dateProc2() {
    {

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

    {

        console.log('------日時の比較------');

        const d1 = new Date(1996, 2, 1);
        const d2 = new Date(2009, 4, 27);

        console.log(d1 > d2);
        console.log(d1 < d2);

    }

    {

        console.log('------日時の演算------');

        const d1 = new Date(1996, 2, 1);
        const d2 = new Date(2009, 4, 27);

        const msDiff = d2 - d1;

        console.log(msDiff);

        const daysDiff = msDiff / 1000 / 60 / 60 / 24;
        console.log(daysDiff);

    }

    {

        console.log('------日時の演算2------');

        const dates = [];
        
        const min = new Date(2017, 0, 1).valueOf();

        /* 差 */
        const delta = new Date(2020, 0, 1).valueOf() - min;

        for (let i = 0; i < 10; i ++) {

            dates.push(new Date(min + delta*Math.random()));

        }

        printDates(dates);

        console.log("----");

        // 降順にソート
        dates.sort((a, b) => b - a);
        printDates(dates);

        console.log("----");

        // 昇順にソート
        dates.sort((a, b) => a - b);
        printDates(dates);

        function printDates(dates) {

            for ( let i = 0; i < dates.length; i++ ) {

                const d = dates[i];
                console.log(`${i}.${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`);

            }

        }

    }

}