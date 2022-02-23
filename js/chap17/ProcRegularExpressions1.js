function ProcRegularExpressions1() {
    
    console.log("------単純マッチング(英文)------");

    const input = "As I was going to Saint Ives";

    console.log(input.startsWith("As"));
    console.log(input.endsWith("Ives"));

    console.log(input.startsWith("going", 9));
    console.log(input.endsWith("going",  14));

    console.log(input.includes("going"));
    console.log(input.includes("going", 10));

    console.log(input.indexOf("going"));
    console.log(input.indexOf("going", 10));
    console.log(input.indexOf("nope"));

    console.log("------単純マッチング（日文）------");

    const input2 = "セント・アイヴスはイギリスにある町の名前です";

    console.log(input2.startsWith("セント"));
    console.log(input2.endsWith("です"));

    console.log(input2.startsWith("イギリス", 9));

    console.log(input2.includes("アメリカ"));
    console.log(input2.includes("町", 10));
    console.log(input2.indexOf("町"));
    console.log(input2.indexOf("町", 10));
    console.log(input2.indexOf("アメリカ"));


    console.log("------単純マッチングとtoLowerCase------");

    console.log(input.toLowerCase().startsWith('as'));

}