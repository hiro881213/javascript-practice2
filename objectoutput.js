function outputLogData() {
    
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

}