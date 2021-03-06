function pipeProc() {
    {

        console.log("------関数を配列に記憶------");

        const sin = Math.sin;
        const cos = Math.cos;
        const theta = Math.PI/4;
        const zoom = 2;
        const offset = [1, -3];

        /* Pipelineに2D変換を行う関数を3つ記憶する */
        const pipeline = [
            function rotate (p) {
                
                return {

                    x: p.x * cos(theta) - p.y * sin(theta),
                    y: p.x * sin(theta) + p.y * cos(theta),

                }

            },

            function scale (p) {

                return {
                    x: p.x * zoom,
                    y: p.y + offset[1]
                };

            },

            function translate (p) {

                return {
                    x: p.x * offset[0],
                    y: p.y + offset[1]
                };

            }

        ];

        // pを変換する
        const p = {
            x: 1,
            y: 1
        };

        console.log(p);

        let p2 = p;

        for ( let i = 0; i < pipeline.length; i++ ) {

            p2 = pipeline[i](p2);
            console.log(p2);

        }

    }

    {

        console.log("------関数に関数を渡す------");

        function sum(arr, f) {

            if (typeof f != 'function') f = x => x;

            return arr.reduce((a, x) => a += f(x), 0);

        }

        console.log(sum([1, 2, 3]));
        console.log(sum([1, 2, 3], x => x * x));
        console.log(sum([1, 2, 3], x => Math.pow(x, 3)));


        console.log("------関数から関数を返す------");

        function newSummer(f) {

            return arr => sum(arr, f);

        }

        const sumOfSquares = newSummer(x => x * x);
        const sumOfCubes = newSummer(x => Math.pow(x, 3));

        console.log(sumOfSquares([1, 2, 3]));
        console.log(sumOfCubes([1, 2, 3]));

    }

    {

        console.log("------再帰------");

        function findNeedle(haystack) {

            if ( haystack.length === 0 ) return "藁山はなくなった";
            if ( haystack.shift() === '針') return "針が見つかった";
            
            console.log(haystack);

            return findNeedle(haystack);

        }

        console.log(findNeedle(['藁','藁','藁','藁','藁','藁','針','藁']));

    }

    {

        console.log("------再帰2------");

        function fact(n) {

            if (n === 1) return 1;
            return n * fact(n - 1);

        }

        console.log(fact(4));
        console.log(fact(5));
        console.log(fact(8));
    }

}