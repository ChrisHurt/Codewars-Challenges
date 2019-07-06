// // First Attempt - scales from 1 to 999
    // var recursions = 0;
    // var firstTime = true;
    // function persistence(num) {
    //     if(firstTime){
    //         recursions = 0;
    //         firstTime = false;
    //     } else if(!firstTime){
    //         recursions++;
    //     }
    //     if(num < 10){
    //         firstTime = true;
    //     }
    //     console.log("r:" + recursions);
    //     for(var i = num.toString().length; i > 0; i-- )

    //     return (num > 99) ? ( persistence((num % 1000 - num % 100)/100 * (num % 100 - num % 10)/10 * (num % 10)) ) : ((num > 9) ? persistence((num % 100 - num % 10)/10 * (num % 10)) : (recursions));
    // }

// Secondn Attempt passes all tests, regardless of input number size
    var recursions = 0;
    var firstTime = true;
    function persistence(num) {
        if(firstTime){
            recursions = 0;
            firstTime = false;
        } else if(!firstTime){
            recursions++;
        }
        if(num < 10){
            firstTime = true;
        }
        var newNum = 1;
        for(var i = 0; i < num.toString().length; i++){
            newNum *= num.toString()[i];
        }
        return (num > 9) ? persistence(newNum) : (recursions);
    }