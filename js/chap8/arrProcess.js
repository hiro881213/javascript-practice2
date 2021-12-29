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
}
