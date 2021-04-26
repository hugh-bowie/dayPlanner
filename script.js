// dcurrent date section

var d = new Date();
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';
var day = weekday[d.getDay()];
var w = d.getDay();
var n = d.toLocaleDateString();
var t = d.getHours();
const dateEl = (document.querySelector('#now').innerHTML = 'Todays Date: ' + day + ' ' + n);

// color change each for past, present, future
// NOT SURE HOIW TO PASS THESE INTO A FOR LOOP SO HERE THEY ARE WITHOUT
const times = new Array(12);
times[0] = $('#6').html();
times[1] = $('#7').val();
times[2] = $('#8').val();
times[3] = $('#9').val();
times[4] = $('#10').val();
times[5] = $('#11').val();
times[6] = $('#12').val();
times[7] = $('#13').val();
times[8] = $('#14').val();
times[9] = $('#15').val();
times[10] = $('#16').val();
times[11] = $('#17').val();
if (t > times[0]) {
	$('input#6').css('background-color', 'silver');
} else $('input#6').css('background-color', 'lightGreen');
if (t > times[1]) {
	$('input#7').css('background-color', 'silver');
} else $('input#7').css('background-color', 'lightGreen');
if (t > times[2]) {
	$('input#8').css('background-color', 'silver');
} else $('input#8').css('background-color', 'lightGreen');
if (t > times[3]) {
	$('input#9').css('background-color', 'silver');
} else $('input#9').css('background-color', 'lightGreen');
if (t > times[4]) {
	$('input#10').css('background-color', 'silver');
} else $('input#10').css('background-color', 'lightGreen');
if (t > times[5]) {
	$('input#11').css('background-color', 'silver');
} else $('input#11').css('background-color', 'lightGreen');
if (t > times[6]) {
	$('input#12').css('background-color', 'silver');
} else $('input#12').css('background-color', 'lightGreen');
if (t > times[7]) {
	$('input#13').css('background-color', 'silver');
} else $('input#13').css('background-color', 'lightGreen');
if (t > times[8]) {
	$('input#14').css('background-color', 'silver');
} else $('input#14').css('background-color', 'lightGreen');
if (t > times[9]) {
	$('input#15').css('background-color', 'silver');
} else $('input#15').css('background-color', 'lightGreen');
if (t > times[10]) {
	$('input#16').css('background-color', 'silver');
} else $('input#16').css('background-color', 'lightGreen');
if (t > times[11]) {
	$('input#17').css('background-color', 'silver');
} else $('input#17').css('background-color', 'lightGreen');
const items = document.querySelectorAll('input');
console.log(times);
console.log(t);
myStorage = window.localStorage;
console.log(myStorage);
