//init moment
var rightNow = moment().format('MMMM Do, YYYY - hh:mm:ss a');
console.log(rightNow);
var hour = moment().format('hh');
console.log(hour);
var pastDate = moment('12-01-1999', 'MM-DD-YYYY').format('dddd, MM/DD/YY');
console.log(pastDate);
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

// add event listener for each input
const saveBtn = $('.btn.btn-success');
$('#6b').on('click', function () {
	let data = $('input#6').val();
	window.localStorage.setItem('6am', data);
});
$('#7b').on('click', function () {
	let data = $('input#7').val();
	window.localStorage.setItem('7am', data);
});
$('#8b').on('click', function () {
	let data = $('input#8').val();
	window.localStorage.setItem('8am', data);
});
$('#9b').on('click', function () {
	let data = $('input#9').val();
	window.localStorage.setItem('9am', data);
});
$('#10b').on('click', function () {
	let data = $('input#10').val();
	window.localStorage.setItem('10am', data);
});
$('#11b').on('click', function () {
	let data = $('input#11').val();
	window.localStorage.setItem('11am', data);
});
$('#12b').on('click', function () {
	let data = $('input#12').val();
	window.localStorage.setItem('12am', data);
});
$('#13b').on('click', function () {
	let data = $('input#13').val();
	window.localStorage.setItem('1pm', data);
});
$('#14b').on('click', function () {
	let data = $('input#14').val();
	window.localStorage.setItem('2pm', data);
});
$('#15b').on('click', function () {
	let data = $('input#15').val();
	window.localStorage.setItem('3pm', data);
});
$('#16b').on('click', function () {
	let data = $('input#16').val();
	window.localStorage.setItem('4pm', data);
});
$('#17b').on('click', function () {
	let data = $('input#17').val();
	window.localStorage.setItem('5pm', data);
});

/*// Getting and setting colors
const inputs = $('input').each(function () {
	const ids = $(this).attr('id');

	if (ids > hour) {
		$(this).css('background-color', 'red');
	}
});
const inpLen = inputs.length;
console.log(inpLen);
console.log(inputs);
*/
