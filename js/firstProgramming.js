function makeFirstProgram() {

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

    // 対象タグを読み込む
    paper.setup(document.getElementById("clickCanvas"));

    // ツールを定義する
    let tool = new Tool();

    // 円
    let ct = Shape.Circle(200, 200, 80);

    ct.fillColor = 'black';

    // テキストを生成する
    let text = new PointText(200, 200);

    // テキストを中央揃えをする
    text.justification = 'center';

    // テキストの色を設定する
    text.fillColor = 'white';

    // フォントサイズ
    text.fontSize = 20;

    // 文字列
    text.content = 'Hello World!';

    // マウスクリック処理
    tool.onMouseDown = (event) => {

        // 円を生成する
        let c = Shape.Circle(event.point.x, event.point.y, 20);

        c.fillColor = 'blue';

    }

    // // 図形を描画する
    // paper.view.draw();

}