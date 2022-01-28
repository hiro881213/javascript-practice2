function procFunc() {
    
    {
        
        console.log("------関数はオブジェクト------");

        const v = function() {};

        const a = [1, 2, 3];

        console.log(typeof(v));
        console.log(typeof(a));
        console.log(v instanceof Object);

    }

    {

        console.log("------IIFEと非同期のコード------");

        setTimeout(() => {
            console.log("hello");
        }, 1500);

        console.log("------IIFEと非同期のコード(カウント)------");

        var i;

        for ( i = 5; i >= 0; i-- ) {

            setTimeout(() => {
                console.log(i === 0 ? "go!" : i);
            }, (5 - i) * 1000);

        }

    }

    {

        console.log("------IIFEと非同期のコード(カウント)2------");

        function loopBody(i) {

            setTimeout(() => {

                console.log(i === 0 ? "go!" : i);

            }, (5 - i) * 1000);

        }

        var i;

        for ( i = 5; i >= 0; i-- ) {

            loopBody(i);

        }

    }

    {

        console.log("------IIFEと非同期のコード[カウント]3------");

        var i;

        for ( i = 5;i >= 0; i-- ) {

            ((i) => {

                setTimeout(() => {
                    
                    console.log(i === 0 ? "go!" : i);

                }, (5 - i) * 1000);

            });

        }

    }

    {

        console.log("------IIFEと非同期のコード[カウント]4------");

        for ( let i = 5; i >= 0; i-- ) {

            setTimeout(() => {

                console.log(i === 0 ? "go!": i);

            }, (5 - i) * 1000);

        }

    }
}