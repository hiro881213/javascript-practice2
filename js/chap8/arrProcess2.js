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
}
