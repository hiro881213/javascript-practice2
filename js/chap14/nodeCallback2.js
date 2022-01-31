const fs = require('fs');

fs.readFile('a.txt', (err, dataA) => {

    if (err) console.error(err);

    fs.readFile('b.txt', (err, dataB) => {

        if (err) console.error(err);

        fs.readFile('c.txt', (err,dataC) => {

            if (err) console.error(err);

            fs.writeFile('d.txt', dataA + dataB + dataC, (err) => {
                if (err) console.err(err);
            });

        });

    });

});
