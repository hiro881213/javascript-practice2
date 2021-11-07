$(document).ready(() => {

    'use strict';
    
    paper.install(window);
    paper.setup(document.getElementById("paperCanvas"));

    // 形状を生成する
    let c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';

    paper.view.draw();

});