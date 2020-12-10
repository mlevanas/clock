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

	hr_degrees = hrPosition;
	min_degrees = minPosition;
	sec_degrees = secPosition;
  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

	console.log(`h_position: ${hrPosition} m_position: ${minPosition} s_position: ${secPosition}`);
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

function toggle_digital_clock()
{
	let clock = document.getElementById('digital-clock');
	clock.style.display = (clock.style.display == '') ? 'none' : '';
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

const HOURS = 12;
function set_roman_numbers()
{
	let roman_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
	for(let i = 0; i < 	HOURS; i++){
		document.getElementById('number_' + (i + 1)).innerHTML = roman_numbers[i];
	}
	console.log('text changed to roman');
}

function set_arabic_numbers()
{
	let i = 0;
	for(; i < 	HOURS; ++i){
		let cls = 'number_' + (i + 1);
		document.getElementById(cls).innerHTML = (i + 1);
	}
}

function set_color(inp, _class)
{
	let arm = document.querySelector(_class);
	arm.style.stroke = inp.value;
}

function set_clock(deg)
{
	let values = {
		0: {h: 12, m: 0},
		30 : {h: 1, m: 5},
		60 : {h: 2, m: 10},
		90 : {h: 3, m: 15},
		120 : {h: 4, m: 20},
		150 : {h: 5, m: 25},
		180 : {h: 6, m: 30},
		210 : {h: 7, m: 35},
		240 : {h: 8, m: 40},
		270 : {h: 9, m: 45},
		300 : {h: 10, m: 50},
		330 : {h: 11, m: 55},
	};

	console.log(deg);
	let selected_arrow = document.getElementById('hand_set');
	switch(selected_arrow.selectedOptions[0].value)
	{
		case 'h':
			HOURHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('hour-val').value = values[deg].h;
			run_the_clock();
			break;
		case 'm':
			MINUTEHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('minut-val').value = values[deg].m;
			run_the_clock();
			break;
		case 's':
			SECONDHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('sec-val').value = values[deg].m;
			run_the_clock();
			break;
	}
}
