function argumentFunction2() {
    
    console.log("-----オブジェクトの分割代入-----");

    function getSentance({subject, verb, object}) {
        return `${subject} ${verb} ${object}`;
    }

    const o = {
        subject : "I",
        verb    : "love",
        object : "JavaScript"
    };

    console.log(getSentance(o));

    console.log("-----配列の分割代入-----");

    function getArrSentence([subject, verb, object]) {
        return `${subject} ${verb} ${object}`
    }

    const arr = ["I", "love", "Java"];
    console.log(getArrSentence(arr));

    console.log("-----スプレッド演算子と引数-----");

    // スプレッド演算子関数
    function addPrefix(prefix, ...words) {

        const prefixedWords = [];

        for ( let i = 0; i < words.length; i++ ) {
            prefixedWords[i] = prefix + words[i]
        }

        return prefixedWords;

    }

    console.log(addPrefix("con", "verse", "vex"));
    console.log(addPrefix("非", "プログラマー", "デザイナー", "コーダー"));

    console.log("-----メソッドの省略記法-----");

    const dog = {
        name: "ワンワン",
        bark() { return "ガオガオ"},
    }

    console.log(dog);
    console.log(dog.bark());

    console.log("-----オブジェクトとthis-----");

    const dog2 = {
        name: "ワンワン",
        speak() { return `${this.name}だぞ` }
    }

    console.log(dog2);
    console.log(dog2.speak());

    console.log("-----オブジェクトとthis2-----");

    const o2 = {
        name : 'Wallace',
        speak() { return `My name is ${this.name}!` }
    }

    const speak = o2.speak;

    console.log(speak === o2.speak);
    console.log(o2.speak());

    console.log("-----オブジェクトとthis3-----");

    const o3 = {
        name: 'Julie',
        
        greetBackwards: () => {
            
            const self = this;

            function getReverseName() {
                
                let nameBackwards = '';

                for (let i = self.name.length - 1; i >=0; i--) {
                    nameBackwards += self.name[i];
                }
                
                return nameBackwards;

            }

            return `${getReverseName()} si eman ym, olleH`;

        },

    };

    console.log(o3.greetBackwards());

}
