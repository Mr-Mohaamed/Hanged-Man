// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersBox = document.querySelector(".letters");
let myLetters = Array.from(letters);

myLetters.forEach((e) => {
	let letter = document.createTextNode(e);
	let letterSpan = document.createElement("span");
	letterSpan.className = "letter";
	letterSpan.appendChild(letter);
	lettersBox.appendChild(letterSpan);
});

// Object Of Words + Categories
const words = {
	programming: [
		"php",
		"javascript",
		"go",
		"scala",
		"fortran",
		"r",
		"mysql",
		"python",
	],
	movies: [
		"Prestige",
		"Inception",
		"Parasite",
		"Interstellar",
		"Whiplash",
		"Memento",
		"Coco",
		"Up",
	],
	people: [
		"Albert Einstein",
		"Hitchcock",
		"Alexander",
		"Cleopatra",
		"Mahatma Ghandi",
	],
	countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
let catSpan = document.querySelector(".game-info .category span");
let randomNum = (num) => Math.floor(Math.random() * num);

let keys = Object.keys(words);
let keysNum = keys.length;
let keysRandomNum = randomNum(keysNum);
let randomKey = keys[keysRandomNum];

catSpan.innerHTML = randomKey;

let randomKeyArray = words[randomKey];
let randomKeyArrayNum = randomKeyArray.length;
let randomKeyArrayRandomNum = randomNum(randomKeyArrayNum);
let randomKeyRandomValue = randomKeyArray[randomKeyArrayRandomNum];
let state = false;
let myDraw = document.querySelector(".draw");
let mistakeNum = 0;
console.log(randomKeyRandomValue);

let ValueLetters = Array.from(randomKeyRandomValue);
console.log(ValueLetters);
ValueLetters.forEach((e) => {
	let guessedLetters = document.querySelector(".letters-guess");
	let guessSpan = document.createElement("span");
	guessSpan.className = "test-span";
	guessedLetters.appendChild(guessSpan);
	console.log(e);
	e == " " ? guessSpan.classList.add("space") : "";
});
let mySpan = document.querySelectorAll(".test-span");
document.addEventListener("click", (e) => {
	state = false;
	if (e.target.className === "letter") {
		e.target.classList.add("clicked");
		ValueLetters.forEach((j, jIndex) => {
			if (j.toLowerCase() === e.target.innerHTML.toLowerCase()) {
				state = true;
				mySpan.forEach((k, kIndex) => {
					if (kIndex == jIndex) {
						k.innerHTML = j;
						k.classList.add("done");
					}
				});
			}
		});
		if (!state) {
			mistakeNum += 1;
			if (mistakeNum == 7) {
				let popUp = document.createElement("div");
				let popUpSpan = document.createElement("span");
				let popUpReload = document.createElement("button");
				let popUpText = document.createTextNode("Lost");
				let popUpReloadText = document.createTextNode("Try Again");

				popUp.className = "pop-up";
				popUpReload.className = "pop-up-reload";

				popUp.appendChild(popUpSpan);
				popUp.appendChild(popUpReload);
				popUpSpan.appendChild(popUpText);
				popUpReload.appendChild(popUpReloadText);
				document.body.appendChild(popUp);

				popUpReload.onclick = () => location.reload();
			}
			myDraw.classList.add(`mistake${mistakeNum}`);
		}
		console.log(mistakeNum);
		if (
			document.querySelectorAll(".test-span.done").length == ValueLetters.length
		) {
			let popUp = document.createElement("div");
			let popUpSpan = document.createElement("span");
			let popUpReload = document.createElement("button");
			let popUpText = document.createTextNode("Victory");
			let popUpReloadText = document.createTextNode("Try Again");

			popUp.className = "pop-up";
			popUpReload.className = "pop-up-reload";

			popUp.appendChild(popUpSpan);
			popUp.appendChild(popUpReload);
			popUpSpan.appendChild(popUpText);
			popUpReload.appendChild(popUpReloadText);
			document.body.appendChild(popUp);

			popUpReload.onclick = () => location.reload();
		}
	}
});
