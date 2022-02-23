function ProcRegularExpressions1() {
    
    console.log("------正規表現(英文)------");

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

}