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

    // 図形を描画する
    paper.view.draw();

});