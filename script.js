// dcurrent date section
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[d.getDay()];
var w = d.getDay();
var n = d.toLocaleDateString();
var t = d.getHours();
const dateEl = document.querySelector('#now').innerHTML = 'Todays Date: ' + day + ' ' + n;
const timeEl = document.querySelector('#time').innerHTML = t + "     REMOVE ME BEFORE SUBMITTING";

// color change each for past, present, future
const times = new Array(12);
times[0] = $('#6').val();
times[1] = $('#7');
times[2] = $('#8');
times[3] = $('#9');
times[4] = $('#10');
times[5] = $('#11');
times[6] = $('#12');
times[7] = $('#13');
times[8] = $('#14');
times[9] = $('#15');
times[10] = $('#16');
times[11] = $('#17');

if (times[0] == t.length) {
    $('#6').text('<input id="6" type="text" class="form-control" placeholder="COLORCHANGE">');
}

console.log(times[0]);
console.log(times[1]);
console.log(times[2]);



