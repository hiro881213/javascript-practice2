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

}
