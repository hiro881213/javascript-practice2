function arrProcess2() {
    {

        console.log("------copyWithin------");

        let arr = [11, 12, 13, 14];

        // arr[1]の位置から置き換えるarr[2]から最後までコピーする
        let arr2 = arr.copyWithin(1,2);
        console.log(arr);
        console.log(arr2);

        // arr[2]の位置から置き換える
        // arr[0]からarr[2]の前までコピーする
        console.log(arr.copyWithin(2, 0, 2));

        // arr[0]の位置から置き換える
        // 最後から3番目の要素から最後の要素の一つ前まで
        console.log(arr.copyWithin(0, -3, -1));

        // arrを変更すると同じ配列を指しているarr2も変わる
        console.log(arr2);

    }

    {
        console.log("------Fillメソッド------");

        // 数値を初期値に設定する
        let arr = new Array(5).fill(1);
        console.log(arr);

        // 文字列を初期値に設定する
        let arr2 = arr.fill("a");
        console.log(arr2);

        // arr[1]から最後まで"b"を代入する
        console.log(arr.fill("b", 1));

        // arr[2]からarr[4]の前まで"c"を代入する
        console.log(arr.fill("c", 2, 4));

        // 最後から4番目の要素から最後まで5.5を代入する
        console.log(arr.fill(5.5, -4));

        // 最後から3番目の要素から最後の一つ前まで0を代入
        console.log(arr.fill(0, -3, -1));

    }

    {

        console.log("------逆転ソート------");

        let arr = [1, 2, 3, 4, 5];
        let arr2 = arr.reverse();

        console.log(arr);
        console.log(arr2);

        arr.reverse();


        console.log(arr);
        console.log(arr2);

    }

    {
        console.log("------ソート------");

        let arr = [5, 4, 3, 2, 1];
        let arr2 = arr.sort();

        console.log(arr);
        console.log(arr2);

        arr2.reverse();

        console.log(arr);
        console.log(arr2);

    }

    {
        console.log("------オブジェクトのソート------");

        let arr = [
            {name: "Suzanne"},
            {name: "Jim"},
            {name: "Trevor"},
            {name: "Amanda"},
        ];

        console.log(arr);

        arr.sort((a, b) => a.name > b.name ? 1 : (a.name === b.name ? 0 : 1));
        console.log("-----");
        console.log(arr);

        arr.sort((a, b) => a.name[1] < b.name[1] ? 1 : (a.name[1] === b.name[1] ? 0 : -1));
        console.log("-----");
        console.log(arr);

    }

    {
        console.log("------検索------");

        const o = { name : "ジュリー"};
        const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

        console.log(arr);
        console.log(arr.indexOf(5));
        console.log(arr.lastIndexOf(5));

        console.log(arr.indexOf("a"));
        console.log(arr.lastIndexOf("a"));

        console.log(arr.indexOf({name: "ジュリー"}));

        console.log(arr.indexOf(o));

        console.log(arr.indexOf([1, 2]));

        console.log(arr.indexOf("9"));
        console.log(arr.indexOf(9));

        console.log(arr.indexOf("a", 5));
        console.log(arr.indexOf(5, 5));

        console.log(arr.lastIndexOf(5, 4));
        console.log(arr.lastIndexOf(true, 3));
    }

    {
        console.log("------オブジェクトの検索------");

        const arr = [
            {id: 5, name: "太郎"},
            {id: 7, name: "花子"}
        ];

        console.log(arr.findIndex(o => o.id === 5));
        console.log(arr.findIndex(o => o.name === "花子"));
        
        console.log(arr.findIndex(o => o === 3));
        console.log(arr.findIndex(o => o.id === 17));

        console.log(arr.findIndex(o => o.id === 7));

    }

    {

        console.log("------findメソッド------");

        const arr = [
            {id: 5, name: "太郎"},
            {id: 7, name: "花子"}
        ];

        console.log(arr.find(o => o.id === 5));
        console.log(arr.find(o => o.id === 2));

    }

    {
        console.log("------累乗処理------");

        const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];

        // 添字が2より大きくて、ルートをとった値が整数になる
        console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));
        console.log(arr.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x))));
        
    }

    {
        console.log("------クラスとfindメソッド------")

        class Person {
            
            constructor(name) {
                this.name = name;
                this.id = Person.nextId++;
            }

        }

        Person.nextId = 0;

        const Jamie = new Person("Jamie");
        const Juliet = new Person("Juliet");
        const Peter = new Person("Peter");
        const Jay = new Person("Jay");

        const arr = [Jamie, Juliet, Peter, Jay];
        console.log(arr.find(p => p.id === Juliet.id));
        console.log(arr.find(p => p.id === this.id, Juliet));
    
    }

}
