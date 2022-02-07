function data(a, b) {

    function factorialize(c, d) {

        let i = 1;

        for (let i = 1; i <= d; i ++){

            c *= c;

        }

    }


    if (a > b) {
        console.error('error');
        return;
    
    } else if (1 > a) {
        console.error('error');
        return;
    
    } else if (a > factorialize(10, 9)){
        console.error('error');
        return;
    
    } else  if (b > factorialize(10, 9)){
        console.error('error');
        return;
    }

    let arrTargetList = [];

    for (let i =1; i <= 100; i++) {

        arrTargetList.push(factorialize(i, 2));

    }

    let count = 0;

    for (let i = a; a <= b; i++) {

        if (i > factorialize(100, 2)) break;


        if (arrTargetList.indexOf(i)) {
            count++;
        }

    }

    console.log(count);



}


