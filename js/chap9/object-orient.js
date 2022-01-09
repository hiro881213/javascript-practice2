function objectOrient () {

    {

        console.log("------for...in------");

        const SYM = Symbol();

        const o = {a: 1, b: 2, c: 3, [SYM]: 4};

        for (let prop in o) {

            if (!o.hasOwnProperty(prop)) continue;
            console.log(`${prop} : ${o[prop]}`);

        }

        console.log("----");

        const o2 = {a: 1, b: 2, c: 3, SYM: 4};

        console.log(o2.SYM);
        console.log(o2["SYM"]);
        console.log(o2[SYM]);   // 値が取得できない

        console.log("----");

        const o3 = {a: 1, b: 2, c: 3};
        
        o3[SYM] = 4;

        console.log(o3.SYM);    // 値が取得できない
        console.log(o3["SYM"]); // 値が取得できない
        console.log(o3[SYM]);

    }
}