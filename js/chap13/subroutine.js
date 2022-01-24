function procSubroutine() {
    {

        console.log("------サブルーチン------")

        // システム年を取得する
        const year = new Date().getFullYear();

        if (year % 4 !== 0) console.log(`${year}年は閏年ではない`)
        else if (year % 100 !== 0) console.log(`${year}年は閏年である`)
        else if (year % 400 !== 0) console.log(`${year}年は閏年ではない`)
        else console.log(`${year}年は閏年である`);

    }

    {

        console.log("------サブルーチンの関数化------");

        function printLeapYearStatus() {

            const year = new Date().getFullYear();
        
            if (year % 4 !== 0) console.log(`${year}年は閏年ではない`)
            else if (year % 100 !== 0) console.log(`${year}年は閏年である`)
            else if (year % 400 !== 0) console.log(`${year}年は閏年ではない`)
            else console.log(`${year}年は閏年である`);

        }

        printLeapYearStatus();

    }

    {
        console.log("------値を返す関数------");

        function isCurrentYearLeap() {

            const year = new Date().getFullYear();

            if (year % 4 !== 0) return false;
            else if (year % 100 != 0) return true;
            else if (year % 400 != 0) return false;
            else return true;

        }

        console.log(isCurrentYearLeap());

    }

}