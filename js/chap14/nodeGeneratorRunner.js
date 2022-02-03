
const fs = require('fs');

console.log('------ジェネレータランナー------');

function grun(g) {

    const it = g();

    (function iterate(val) {

        const x = it.next(val);

        if (!x.done) {

            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }

        }

    })();

}