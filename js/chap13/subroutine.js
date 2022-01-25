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

    {

        console.log("------純粋関数を満たさない例------");

        const colors = [
            '赤','橙','黄','緑','青','水色','紫'
        ];

        let colorIndex = -1;

        function getNextRainbowColor() {

            if (++colorIndex >= colors.length) colorIndex = 0;
            return colors[colorIndex];

        }

        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());

    }

    {

        console.log("------純粋関数------");

        function isLeapYear(year) {
            if (year % 4 !== 0 ) return false;
            else if (year % 100 != 0) return true;
            else if (year % 400 != 0) return false;
            else return true;
        }

        console.log(isLeapYear(new Date().getFullYear()));

    }

    {

        console.log("------純粋関数2------");

        const getNextRainbowColor = (function() {

            const colors =[
                '赤','橙','黄','緑','青','青','水色','紫'
            ];

            let colorIndex = -1;

            return function() {

                if (++colorIndex >= colors.length) colorIndex = 0;
                return colors[colorIndex];
            
            }

        })();
        
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());
        console.log(getNextRainbowColor());

    }

}