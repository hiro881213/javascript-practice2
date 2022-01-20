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

        console.log("------シンボルとイテレータの利用------");

        const it2 = book[Symbol.iterator]();

        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());
        console.log(it2.next());

        console.log("------doneとイテレータの利用------");

        const it3 = book.values();

        let current = it3.next();
    
        while(!current.done) {
    
            console.log(current.value);
            current = it3.next();
    
        }

        console.log("------複数のイテレータの利用------");

        const it4 = book.values();
        const it5 = book.values();

        console.log(it4.next());
        console.log(it4.next());

        console.log(it5.next());

        console.log(it4.next());

        console.log(it5.next());

    }

    {
        console.log("------LogクラスとsetTimeout------");

        // Logクラス
        class Log {
            
            // コンストラクタ
            constructor() {
                this.messages = [];
            }

            // 追加処理
            add(message) {

                const now = Date.now();
                console.log(`ログ追加: ${message} (${now})`);
                this.messages.push({message, timestamp: now});

            }

            // イテレータ
            [Symbol.iterator]() {
                return this.messages.values();
            }

        }

        const log = new Log();

        log.add("TEST1");

        setTimeout(() =>{
            log.add("TESTB"),
            3*1000 /* 3s後 */
        });

        setTimeout(() =>{
            log.add("TESTC"),
            7*1000 /* 7s後 */
        });

        setTimeout(() =>{
            log.add("TESTD"),
            9*1000 /* 9s後 */
        });

        setTimeout(() => {
            
            console.log(`本日の業務報告-(${new Date()})`);

            for (let entry of log) {

                const date = new Date(entry.timestamp);
                console.log(`${entry.message} (${date})`);
            }

        }, 10*1000);

    }

    {

        console.log("------LogクラスとsetTimeout2------");


        class Log {

            // コンストラクタ
            constructor() {
                this.messages = [];
            }

            add(message) {

                const now = Date.now();
                
                console.log(`ログ追加${message} (${now})`);
                
                this.messages.push({message, timestamp: now});
            
            }

            [Symbol.iterator]() {

                let i = 0;
                const messages = this.messages;

                return {
                    next : () => i >= messages.length ?
                        {value:undefined, done:true} :
                        {value: messages[i++], done: false}
                }

            }

        }

        const log = new Log();
        
        log.add("業務開始");

        setTimeout(() => {
            log.add("鯨を見た");
        }, 3*1000);

        setTimeout(() => {
            log.add("一隻の船をみた");
        }, 7*1000);

        setTimeout(() => {
            log.add("監視終了");
        }, 9*1000);

        setTimeout(() => {
            
            console.log(`本日の業務報告- (${new Date()})`);

            for(let entry of log) {

                const date = new Date(entry.timestamp);
                console.log(`${entry.message}(${date})`);

            }

        }, 10 * 1000);

    }

    {
        console.log("------フィボナッチ数列------");
    
        class FibonacciSequenece {

            [Symbol.iterator]() {

                let a = 0, b = 1;

                return {

                    next() {

                        let rval = { value: b, done:false };
                        b += a;
                        a = rval.value;

                        return rval;

                    }

                };

            }

        }


    }

}