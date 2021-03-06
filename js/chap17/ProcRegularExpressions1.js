function ProcRegularExpressions1() {
    {
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

        console.log("------replace------");

        const output = input.replace("going", "walking");
        console.log(output);

        let output2 = input2.replace("イギリス", "英国");
        output2 = output2.replace("名前", "名称");

        console.log(output2);
 
    }

    {
       
        console.log("------正規表現の生成------");

        const input = "As I was going to Saint Ives;"

        const re = /\w{3,}/ig;
        
        // 正規表現での検索し
        console.log(input.match(re));

        // 最初に見つかるものの位置を検索
        console.log(input.search(re));

        // 正規表現にマッチするかtrue/falseで返す
        console.log(re.test(input));

        console.log("------正規表現の生成（2）------");

        // execは文字位置を記憶する
        let a = re.exec(input);
        
        // [ 'going', index: 9, input: 'As I was going to Saint Ives' ]
        console.log(a);

        console.log(a[0]);

        // 文字列の位置を取得
        console.log(a.index);

        // 対象文字列
        console.log(a.input);

        console.log("------正規表現の生成（3）------");

        // [ "Saint" ]
        console.log(re.exec(input));

        // [ "Ives" ]
        console.log(re.exec(input));
        console.log(re.exec(input));

        console.log("------正規表現のリテラルの利用------");

        console.log(input.match(/\w{3,}/ig));
        console.log(input.match(/\w{3,}/i));
        console.log(input.search(/\w{3,}/ig));


    }
}