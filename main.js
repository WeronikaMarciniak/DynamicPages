var year = document.querySelector('#year');
var month = document.querySelector('#month');
var day = document.querySelector('#day');
var numbers = document.querySelector('#numbers');

var validate_button = document.querySelector('#validate');
var show_button = document.querySelector('#show');
var find_button = document.querySelector('#find');

if (window.Worker) {
    var validate = new Worker("validate_pesel.js");
    var show = new Worker("show_pesels.js");
    var find = new Worker("find_pesels.js");

    validate_button.onclick = function () {
        validate.postMessage([year.value, month.value, day.value, numbers.value]);
    }

    show_button.onclick = function () {
        show.postMessage([year.value, month.value, day.value]);
    }

    find_button.onclick = function () {
        find.postMessage([numbers.value]);
    }

    validate.onmessage = function (e) {
        if (e.data === true) {
        document.querySelector('#results').innerHTML="Pesel jest poprawny";}
        else {
        document.querySelector('#results').innerHTML="Pesel jest niepoprawny";}
    }
    show.onmessage = function (e) {
        document.querySelector('#results').innerHTML=e.data.join(", ");
    }
    find.onmessage = function (e) {
        document.querySelector('#results').innerHTML=e.data.join(", ");
    }
} else {
    console.log('Your browser doesn\'t support web workers.');
}
