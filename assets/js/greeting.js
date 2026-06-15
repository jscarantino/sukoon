// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with a typewriter effect

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greetingText = '';
if (hour >= 23 || hour < 6) {
	greetingText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	greetingText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	greetingText = gree3 + name;
} else {
	greetingText = gree4 + name;
}

const typeWriter = (element, text, speed = 60) => {
	element.innerText = '';
	element.classList.remove('done');
	let i = 0;
	const timer = setInterval(() => {
		if (i < text.length) {
			element.innerText += text.charAt(i);
			i++;
		} else {
			clearInterval(timer);
			// Smoothly fade out the cursor after a small delay
			setTimeout(() => {
				element.classList.add('done');
			}, 1000);
		}
	}, speed);
};

typeWriter(document.getElementById('greetings'), greetingText, 75);
