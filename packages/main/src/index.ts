const mainScreen = document.querySelector<HTMLDivElement>("#screen");

function addPixel() {
	const div = document.createElement("div");
	mainScreen.appendChild(div);
}

for (let i = 0; i < 56 * 80; i++) {
	addPixel();
}
