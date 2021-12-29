function arrProcess() {
    
    // 配列
    {

        // ---------------------------
        // 配列リテラル
        // ---------------------------
    
        console.log("------配列リテラル------");

        // 数字の配列
        const arr1 = [1, 2, 3];
        
        // 異なる型の要素を持つ配列
        const arr2 = ["one", 2, "three"];
        
        // 配列を要素とする配列
        const arr3 = [[1, 2, 3], ["one", 2, "three"]];

        // オブジェクトや配列、関数など異なる肩を要素として持つ配列
        const arr4 =[
            {name: "サル", type: "object", luckyNumber: [5, 7, 13]},
            [
                {name: "キジ", type: "object"},
                {name: "鬼"  , type: "object"}
            ],
            1,
            function() { return "配列の要素として関数を記憶することもできる"; },
            "three",
        ];

        // 要素へのアクセス
        console.log(arr1[0]);
        console.log(arr1[2]);
        console.log(arr3[1]);
        console.log(arr4[1][0]);

        // 配列の長さ
        console.log(arr1.length);
        console.log(arr4.length);
        console.log(arr4[1].length);

        // 配列の長さを大きくする
        arr1[4] = 5;
        console.log(arr1);
        console.log(arr1[3]);
        console.log(arr1.length);

        // 配列の最後の要素より後ろの添え字を使う
        console.log(arr2[10]);
        console.log(arr2.length);

        // Arrayコンストラクタ
        // からの配列を生成
        const arr5 = new Array();
        console.log(arr5);

        const arr6 = new Array(1, 2, 3);
        console.log(arr6);

        // 長さ2の配列
        const arr7 = new Array(2);
        console.log(arr7);
        console.log(arr7[1]);

        const arr8 = new Array("2");
        console.log(arr8);

    }
    {

        console.log("------配列変更メソッド------")
        
        let arr = ["b", "c", "d"];

        console.log(arr);

        console.log(arr.push("e"));
        console.log(arr);

        console.log(arr.pop());
        console.log(arr);

        console.log(arr.unshift("a"));
        console.log(arr);

        console.log(arr.shift());
        console.log(arr);

    }

    {

        console.log("------複数要素の追加------")

        let arr = [1, 2, 3];
        let arr2 = arr.concat(4, 5, 6);
        
        // 配列は変化しない
        console.log(arr);
        console.log(arr2);

        // 配列を渡す
        arr2 = arr.concat([4, 5, 6]);
        console.log(arr2);

        arr2 = arr.concat([4,5], 6)
        console.log(arr2);

        arr2 = arr.concat([4,5], [6, 7]);
        console.log(arr2);

        arr2 = arr.concat([4, [5, 6]]);
        console.log(arr2);

    }

    {

        console.log("------部分配列------")

        let arr = [11, 12, 13, 14, 15];

        // arr[3]から後ろ
        let arr2 = arr.slice(3);
        console.log(arr2);
        console.log(arr);

        // arr[2]〜arr[4]の一つ前まで
        arr2 = arr.slice(2,4);
        console.log(arr2);

        // arr[1]から最後から二番目の一つ前まで
        arr2 = arr.slice(1, -2);
        console.log(arr2);

        // 最後から二番目から最後から一番目の一つ前まで
        arr2 = arr.slice(-2, -1);
        console.log(arr2);

    }

    {

        console.log("------splice------")
        let arr = [1, 5, 7];
        
        // arr[1]から2,3,4が追加される
        // arr2は削除された要素
        let arr2 = arr.splice(1, 0, 2, 3, 4);
        console.log(arr);

        // 何も追加したされていない
        console.log(arr2);

        // arr[5]に6が追加されて、以降一つずつ後ろへ
        arr2 = arr.splice(5, 0, 6);
        console.log(arr)
        console.log(arr2)
        
        // arr[1]から2個削除
        arr2 = arr.splice(1, 2);
        console.log(arr);
        console.log(arr2);

        // arr[2]から1個削除して'a','b'を追加
        arr2 = arr.splice(2,1,'a', 'b');
        console.log(arr);
        console.log(arr2);




    }
}
