function procGenerator() {
    {

        // ジェネレータを生成する
        function* rainbow() {
            yield '赤';
            yield '橙';
            yield '黄';
            yield '緑';
            yield '青';
            yield '水';
            yield '紫';
        }

        const it = rainbow();

        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());

        console.log("------")

        for (let color of rainbow()) {
            console.log(color);
        }

    }

    {

        console.log("------yield式と双方向コミュニケション------");

        function* interrogate() {

            const name = yield "お名前は？";
            const color = yield "お好きな色は何ですか？";

            return `${name}さんの好きな色は${color}です`;

        }

        const it = interrogate();

        console.log(it.next());

        console.log(it.next("ワンワン"));
        console.log(it.next("青"));

        
    }

}