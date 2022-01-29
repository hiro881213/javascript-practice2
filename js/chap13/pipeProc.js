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

}