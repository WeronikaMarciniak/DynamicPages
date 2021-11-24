var year;
var month;
var day;
var last5numbers;
var pesel = "";

onmessage = function(e) {
    var validateResult = validate(e.data[0],e.data[1], e.data[2], e.data[3]);
    postMessage(validateResult);
}

function validate(y, m, d, n) {
    year = y;
    month = m;
    day = d;
    last5numbers = n;
    concatenate();
    var numberArray = [];
    for (var i=1; i<=pesel.length; i++) {
        numberArray[i-1] = parseInt(pesel.substring(i-1, i))
    }
    var mult = numberArray[0] + (numberArray[1]*3) + (numberArray[2]*7) + (numberArray[3]*9) + numberArray[4] + (numberArray[5]*3) + (numberArray[6]*7) + (numberArray[7]*9) + numberArray[8] + (numberArray[9]*3);
    var result = 10 - (mult % 10);
    if (result===10) {
        result = 0;
    }
    if (result === numberArray[10]) {
        return true;
    }
    else {
        return false;
    }
}

function concatenate() {
    var intYear = parseInt(year);
    var intMonth = parseInt(month);
    var intDay = parseInt(day);
    if (intYear >= 1800 && intYear <= 1899) {
        intMonth += 80;
    }
    else if (intYear >= 2000 && intYear <= 2099) {
        intMonth += 20;
    }
    else if (intYear >= 2100 && intYear <= 2199) {
        intMonth += 40;
    }
    else if (intYear >= 2200 && intYear <= 2299) {
        intMonth += 60;
    }
    month = intMonth
    if (intMonth < 10) {
        month = "0" + month;
    }

    day = intDay
    if (intDay < 10) {
        day = "0" + day;
    }

    if (year.length === 4) year = year.substring(2,4);
    pesel = year + month + day + last5numbers;
    console.log(pesel);
}
