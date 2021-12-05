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

}