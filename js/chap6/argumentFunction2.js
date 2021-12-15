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

}
