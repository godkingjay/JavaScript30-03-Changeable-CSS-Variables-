let hue = 0;
const controlType = Array.from(document.querySelectorAll(".controls-type-bg"));
const inputs = document.querySelectorAll(".controls-type input")

function addHue(){
	controlType.forEach(function(item){
		item.style.filter = `brightness(65%) hue-rotate(${hue}deg)`;
		hue += 30;
	});
	hue = 30;
}

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

addHue();

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));