$(document).ready(() => {

    'use strict';

    // ペーパーを読み込む
    paper.install(window);

    // 対象タグを読み込む
    paper.setup(document.getElementById("paperCanvas"));

    // 丸を生成する
    let c = Shape.Circle(200, 200, 50);

    // 色を塗る
    c.fillColor = 'green';

    // 対象タグを読み込む
    paper.setup(document.getElementById("repeatCanvas"));

    // 繰り返し処理を実行する
    for (let x = 25; x < 400; x+=50) {

        for (let y = 25; y < 400; y+=50) {

            // 円を生成する
            c = Shape.Circle(x, y, 20);

            // 色を塗る
            c.fillColor = 'green';

        }

    }

    // 図形を描画する
    paper.view.draw();


});