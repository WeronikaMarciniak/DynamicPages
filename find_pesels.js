var year;
var month = 0;
var day;
var last5numbers;
var pesel = "";

onmessage = function(e) {
    var validateResult = validate(e.data[0]);
    postMessage(validateResult);
}

function validate(n) {
    last5numbers = n;
    var peselArray = [];
    var extendMonth = 0;
    for (var y=30; y<=150; y++) {
        year = y + 1900;
        if (year > 1999) extendMonth = 20;
        else extendMonth = 0;
        for (var m=1; m<=12; m++) {
            month = m+extendMonth;
            if (month < 10) {
                month = "0" + month;
            }
            for (var d=1; d<=new Date(year, month, 0).getDate(); d++) {
                day = d;
                if (day < 10) {
                    day = "0" + day;
                }
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
                    peselArray.push(pesel);
                }
            }
        }
    }
    return peselArray;
}

function concatenate() {
    var stringYear = year.toString()
    if (stringYear.length === 4) stringYear = stringYear.substring(2,4);
    pesel = stringYear + month + day + last5numbers;
}
