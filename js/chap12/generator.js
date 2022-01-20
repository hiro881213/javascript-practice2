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

}