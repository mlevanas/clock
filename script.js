// Constants that won't change through the script
// #hour - target id for hour hand in the svg
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const HOUR_ARROW_ARRAY = document.querySelectorAll('.hour-arrow');
const MINUTE_ARROW_ARRAY = document.querySelectorAll('.minute-arrow');
const SECOND_ARROW_ARRAY = document.querySelectorAll('.second-arrow');

HOURHAND.addEventListener('click', function() {selected_arrow = 'h'; console.log('hour-clicked'); });
MINUTEHAND.addEventListener('click', function() {selected_arrow = 'm'; console.log('minutes-clicked'); });
SECONDHAND.addEventListener('click', function() {selected_arrow = 's'; console.log('seconds-clickd'); });

let current_type = 0;
let hidden_type = 2;

let clock_types = {0: '1.png', 1: '2.png', 2: '3.png', 3: '4.png', 4: '5.png'}

function change_clock_type(selected_el)
{
	//TODO sugalvoti algoritma laikrodziu keitimui
}

let selected_arrow = 'h';

function run_the_clock(){
 // var date = new Date();
  let hr = document.getElementById('hours-input').value; //date.getHours();
  let min = document.getElementById('minutes-input').value; //date.getMinutes();
  let sec = document.getElementById('seconds-input').value; //date.getSeconds();
  console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

  let hrPosition = hr*360/12 + ((min * 360/60)/12);
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

	hr_degrees = hrPosition;
	min_degrees = minPosition;
	sec_degrees = secPosition;
  //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

	HOUR_ARROW_ARRAY.forEach(arrow => { arrow.style.transform = "rotate(" + hrPosition + "deg)"; });
	MINUTE_ARROW_ARRAY.forEach(arrow => { arrow.style.transform = "rotate(" + minPosition + "deg)"; });
	SECOND_ARROW_ARRAY.forEach(arrow => { arrow.style.transform = "rotate(" + secPosition + "deg)"; });

	console.log(`h_position: ${hrPosition} m_position: ${minPosition} s_position: ${secPosition}`);
}

run_the_clock();

function toggle_secundes()
{
	toggle_hand(SECONDHAND);
	toggle_checkbox('seconds-toggle-svg');
}

function toggle_minutes()
{
	toggle_hand(MINUTEHAND);
	toggle_checkbox('minutes-toggle-svg');
}

function toggle_hours()
{
	toggle_hand(HOURHAND);
	toggle_checkbox('hours-toggle-svg');
}

function toggle_checkbox(checbox_id)
{
	let el = document.getElementById(checbox_id);
	el.style.display = (el.style.display == '') ? 'none' : '';
}

function toggle_minute_marks()
{
	let minute_marks = document.querySelectorAll('.minutes-mark');
	minute_marks.forEach(mark => { mark.style.display = (mark.style.display == '') ? 'none' : '';  });
	toggle_checkbox('minutes-marks-toggle-svg');
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
	switch(selected_arrow)
	{
		case 'h':
			HOURHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('hours-input').value = values[deg].h;
			run_the_clock();
			break;
		case 'm':
			MINUTEHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('minutes-input').value = values[deg].m;
			run_the_clock();
			break;
		case 's':
			SECONDHAND.style.transform = `rotate(${deg}deg)`;
			document.getElementById('seconds-input').value = values[deg].m;
			run_the_clock();
			break;
	}
}

function change_color(el, color_code)
{
	let title = document.querySelector('.title');
	title.style.color = color_code;

	let clock = document.querySelector('.circle');
	clock.style.stroke = color_code;

	let settings = document.querySelectorAll('.settings');
	settings.forEach((s) => { s.style.backgroundColor = color_code; });

	let checkboxes = document.querySelectorAll('.select-color svg');
	checkboxes.forEach((c) => { c.style.display = 'none'; }); //paslepk visus checkboxus
	el.getElementsByTagName('svg')[0].style.display = '';

	let hours_input = document.querySelector('#hours-input');
	hours_input.style.borderTop = 'solid 15px ' + color_code;
	hours_input.style.borderLeft = 'solid 15px ' + color_code;
	hours_input.style.borderBottom = 'solid 15px ' + color_code;

	let minutes_input = document.querySelector('#minutes-input');
	minutes_input.style.borderTop = 'solid 15px ' + color_code;
	minutes_input.style.borderBottom = 'solid 15px ' + color_code;
	minutes_input.style.borderRight = 'solid 15px ' + color_code;

	let second_input = document.querySelector('#seconds-input');
	second_input.style.borderTop = 'solid 15px ' + color_code;
	second_input.style.borderLeft = 'solid 15px ' + color_code;
	second_input.style.borderRight = 'solid 15px ' + color_code;
	second_input.style.borderBottom = 'solid 15px ' + color_code;

}

let blue = document.querySelectorAll('.select-color')[0];
change_color(blue, '#01a0e2');
