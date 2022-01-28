function procFunc() {
    
    {
        
        console.log("------関数はオブジェクト------");

        const v = function() {};

        const a = [1, 2, 3];

        console.log(typeof(v));
        console.log(typeof(a));
        console.log(v instanceof Object);

    }

    {
        console.log("------IIFEと非同期のコード------");

        setTimeout(() => {
            console.log("hello");
        }, 1500);
    }

}