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


}