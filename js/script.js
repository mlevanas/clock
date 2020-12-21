const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const HOUR_ARROW_ARRAY = document.querySelectorAll('.hour-arrow');
const MINUTE_ARROW_ARRAY = document.querySelectorAll('.minute-arrow');
const SECOND_ARROW_ARRAY = document.querySelectorAll('.second-arrow');

HOURHAND.addEventListener('click', function() {selected_arrow = 'h'; /*console.log('hour-clicked');*/ });
MINUTEHAND.addEventListener('click', function() {selected_arrow = 'm'; /*/console.log('minutes-clicked');*/ });
SECONDHAND.addEventListener('click', function() {selected_arrow = 's'; /*/console.log('seconds-clickd');*/ });

let current_type = 0;
let hidden_type = 2;

let clock_types = {0: 'assets/1.png', 1: 'assets/2.png', 2: 'assets/3.png', 3: 'assets/4.png', 4: 'assets/5.png'}
let clock_looks = {0: 'assets/1.png', 1: 'assets/1.png', 2: 'assets/1.png', 3: 'assets/4.png', 4: 'assets/1.png' } //ciferblatai pagrindiniam laikrodziui

let show_real_time = false;

function change_clock_type(selected_el)
{
	let ciferblatas = document.getElementById('ciferblatas');
	let old_type = ciferblatas.getAttribute('data-clockindex');
	let new_type = selected_el.getAttribute('data-clockindex');

	ciferblatas.setAttribute('data-clockindex', new_type);
	ciferblatas.setAttribute('href', clock_looks[new_type]);

	selected_el.setAttribute('href', clock_types[old_type]);
	selected_el.setAttribute('data-clockindex', old_type);

	update_looks(new_type);
}

function update_looks(clock_type)
{
	//console.log(clock_type);
	switch(clock_type)
	{
		case '0': //tik zymejimai
			toggle_numbers('none');
			break;
		case '1': //romeniski
			toggle_numbers('inherit');
			show_all_numbers();
			set_roman_numbers();
			break;
		case '2': //arabiski visi
			toggle_numbers('inherit');
			show_all_numbers();
			set_arabic_numbers();
			break;
		case '3': //tuscias
			toggle_numbers('none');
			break;
		case '4': //tik pagrindiniai skaiciai
			toggle_numbers('inherit');
			set_arabic_numbers();
			show_only_main_numbers();
			break;
	}
}

let selected_arrow = 'h';

function run_the_clock(){
	let date = new Date();
	let hr = document.getElementById('hours-input').value; //date.getHours();
	let min = document.getElementById('minutes-input').value; //date.getMinutes();
	let sec = document.getElementById('seconds-input').value; //date.getSeconds();
	if(!show_real_time)
	{
		validateInput();

	} else if(show_real_time)
	{
		hr = date.getHours();
		min = date.getMinutes();
		sec = date.getSeconds();

		document.getElementById('hours-input').value = hr;
		document.getElementById('minutes-input').value = min;
		document.getElementById('seconds-input').value = sec;
	}

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

	//console.log(`h_position: ${hrPosition} m_position: ${minPosition} s_position: ${secPosition}`);
}

//window.setInterval(run_the_clock, 1000);
run_the_clock();
function validateInput(hr, min, sec)
{
	if(hr > 23 || hr < 0)
	{
		alert('Jųs įvedėte neegzistuojantį laiką');
		hr = 12;
		document.getElementById('hours-input').value = hr;
	}
	if(min > 59 || min < 0){
		alert('Jųs įvedėte neegzistuojantį laiką');
		min = 0;
		document.getElementById('minutes-input').value = min;
	}
	if(sec > 59 || sec < 0){
		alert('Jųs įvedėte neegzistuojantį laiką');
		sec = 0;
		document.getElementById('seconds-input').value = sec;
	}
}

let real_time_interval = null;
function toggle_real_time()
{
	let time_input_array = document.querySelectorAll('.time-input');
	show_real_time = !show_real_time;
	if(show_real_time){
		real_time_interval = setInterval(run_the_clock, 1000);
		time_input_array.forEach(time => time.readOnly = true);
		run_the_clock();
	}
	else if(!show_real_time)
	{
		time_input_array.forEach(time => time.readOnly = false);
		clearInterval(real_time_interval);
		run_the_clock();
	}

	toggle_checkbox('real-time-toggle-svg');
}

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

function toggle_numbers(display)
{
	let numbers = document.querySelectorAll('.numbers_main, .numbers_other');
	numbers.forEach(number => { number.style.display = display; });
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
	//console.log('text changed to roman');

	//atstumti 8 desiniau
	
	
	let eigth = document.querySelector('#numbers #number_8');
	eigth.setAttribute('x', 85);
}

function set_arabic_numbers()
{
	let i = 0;
	for(; i < 	HOURS; ++i){
		let cls = 'number_' + (i + 1);
		document.getElementById(cls).innerHTML = (i + 1);
	}

	//atstumti 8 kairiau
	let eigth = document.querySelector('#numbers #number_8');
	eigth.setAttribute('x', 115);
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

	//console.log(deg);
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
