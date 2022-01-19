function procIterator() {
    
    {
        console.log("------for~Of処理------");

        const book = [
            "A本",
            "B本",
            "C本",
            "D本",
            "E本",
            "F本",
            "G本"
        ];

        for (let aPage of book) {
            console.log(aPage);
        }

        console.log("------イテレータの利用------");

        const it = book.values();
        
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

    }

}