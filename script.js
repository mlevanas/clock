// Constants that won't change through the script
// #hour - target id for hour hand in the svg
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function run_the_clock(){
  var date = new Date();
  let hr = document.getElementById('hour-val').value; //date.getHours();
  let min = document.getElementById('minut-val').value; //date.getMinutes();
  let sec = document.getElementById('sec-val').value; //date.getSeconds();
  console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

run_the_clock();

function toggle_secundes()
{
	toggle_hand(SECONDHAND);
}

function toggle_minutes()
{
	toggle_hand(MINUTEHAND);
}

function toggle_hand(hand)
{
	hand.style.display = (hand.style.display == "") ? 'none' : '';
}

function toggle_numbers()
{
	let numbers = document.getElementById('numbers');
	numbers.style.display = (numbers.style.display == '') ? 'none' : '';
}

function show_only_main_numbers()
{
	let other_numbers = document.querySelectorAll('.numbers_other');
	let main_numbers = document.querySelectorAll('.numbers_main');

	other_numbers.forEach(el => { el.style.display = 'none'; });
	main_numbers.forEach(el => { el.style.display = ''; });
}

function show_all_numbers()
{
	let other_numbers = document.querySelectorAll('.numbers_other');
	let main_numbers = document.querySelectorAll('.numbers_main');

	other_numbers.forEach(el => { el.style.display = ''; });
	main_numbers.forEach(el => { el.style.display = ''; });
}

function set_roman_numbers()
{
	document.getElementById('number_1').innerHTML = 'I';
	document.getElementById('number_2').innerHTML = 'II';
	document.getElementById('number_3').innerHTML = 'III';
	document.getElementById('number_4').innerHTML = 'IV';
	document.getElementById('number_5').innerHTML = 'V';
	document.getElementById('number_6').innerHTML = 'VI';
	document.getElementById('number_7').innerHTML = 'VII';
	document.getElementById('number_8').innerHTML = 'VIII';
	document.getElementById('number_9').innerHTML = 'IX';
	document.getElementById('number_10').innerHTML = 'X';
	document.getElementById('number_11').innerHTML = 'XI';
	document.getElementById('number_12').innerHTML = 'XII';
	console.log('text changed to roman');
}

function set_arabic_numbers()
{
	document.getElementById('number_1').innerHTML = '1';
	document.getElementById('number_2').innerHTML = '2';
	document.getElementById('number_3').innerHTML = '3';
	document.getElementById('number_4').innerHTML = '4';
	document.getElementById('number_5').innerHTML = '5';
	document.getElementById('number_6').innerHTML = '6';
	document.getElementById('number_7').innerHTML = '7';
	document.getElementById('number_8').innerHTML = '8';
	document.getElementById('number_9').innerHTML = '9';
	document.getElementById('number_10').innerHTML = '10';
	document.getElementById('number_11').innerHTML = '11';
	document.getElementById('number_12').innerHTML = '12';
}
