function outputLogData() {

    // --------------------------------------
    // オブジェクト型
    // --------------------------------------

    // オブジェクト
    const sam1 = {
        name : "Sam",
        age  : 4
    };

    console.log(sam1);

    // オブジェクト2
    const sam2 = { name: "Sam", age: 4 };
 
    console.log(sam2);
    console.log(sam1.name === sam2.name);
    console.log(sam1.age === sam2.age);
    console.log(sam1 === sam2);

    // オブジェクト3
    const sam3 = {
        name: "Sam",
        classification: {
            kingdom  : 'Animalia',
            phylum   : 'Chordata',
            class    : 'Mamalia',
            order    : 'Carnivoria',
            family   : 'Felidae',
            subfamily: 'Felinae',
            genus    : 'Felis',
            species  : 'F. catus',
        },
    };

    console.log(sam3);
    console.log(sam3.classification.family);
    console.log(sam3["classification"].family);
    console.log(sam3.classification["family"]);
    console.log(sam3["classification"]["family"]);

    // オブジェクトに関数を設定する
    sam3.speak = function() { return "Meow" };

    console.log(sam3.speak());

    // オブジェクトの要素を消す
    delete sam3.classification;
    delete sam3.speak;

    console.log(sam3);

    const s = "hello";

    // 大文字に変換する
    const s2 = s.toUpperCase();

    console.log(s2);

    // --------------------------------------
    // 配列
    // --------------------------------------

    const a1 = [1, 2, 3, 4];

    const a2 = [1, 'two', 3, null];

    const a3 = [
        "What the hammer? What the chain?",
        "In what furnace was thy brain?",
        "What the anvil? What dread grasp",
        "dare its deadly terrors clasp?",
    ];

    const a4 = [
        {name: "Ruby", hardness: 9},
        {name: "Diamond", hardness: 10},
        {name: "Topaz", hardness: 8}
    ];

    const a5 = [
        [1, 3, 5],
        [2, 4, 6]
    ];

    console.log(a1.length);
    console.log(a1[0]);
    console.log(a3[a3.length - 2]);

    // --------------------------------------
    // Date型
    // --------------------------------------

    // システム日付を取得する
    const now = new Date();
    console.log(now);

    const halloween = new Date(2016, 9, 31);
    console.log(halloween);

    const halloweenParty = new Date(2016, 9, 31, 19, 0);
    console.log(halloweenParty);
    console.log(halloweenParty.getFullYear());
    console.log(halloweenParty.getMonth());
    console.log(halloweenParty.getDate());
    console.log(halloweenParty.getDay());
    console.log(halloweenParty.getHours());
    console.log(halloweenParty.getMinutes());
    console.log(halloweenParty.getSeconds());
    console.log(halloweenParty.getMilliseconds());

    // --------------------------------------
    // 数値
    // --------------------------------------

    const numStr = "33.3";
    const num = Number(numStr);
    console.log(num);

    const parA = parseInt("16 volts", 10);
    console.log(parA);
    
    const parB = parseInt("3a", 16);
    console.log(parB);

    const parC = parseFloat("15.5 kph");
    console.log(parC);

    const parD = new Date();
    console.log(parD);
    const ts = parD.valueOf();
    console.log(ts);

    // --------------------------------------
    // 論理値
    // --------------------------------------

    const bb = true;
    const cc = false;

    const n = bb ? 1 : 0;
    console.log(n);

    const m = cc ? 1 : 0;
    console.log(m);

    const nn = 0;
    const b0 = !nn;
    const b1 = Boolean(nn);
    
    console.log(nn);
    console.log(b0);
    console.log(b1);

}