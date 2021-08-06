

let phone_inputs = document.querySelectorAll('.phone-input');
phone_inputs.forEach(input => {
	Inputmask({
		"mask": "+7 (999) 999-99-99"
	}).mask(input);
});