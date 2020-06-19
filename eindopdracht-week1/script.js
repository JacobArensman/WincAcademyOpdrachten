
let grayColor = () => {document.body.style.backgroundColor = "Gray";}

let redColor = () => {document.body.style.backgroundColor = "Red";}

let orangeColor = () => {document.body.style.backgroundColor = "Orange";}

let purpleColor = () => {document.body.style.backgroundColor = "Purple";}

let greenColor = () => {document.body.style.backgroundColor = "Green";}

		let toggleStatus = 1;
		function menuToggle() {
			if (toggleStatus == 1) {
				document.getElementById("menu").style.left = "-240px";
				toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementById("menu").style.left = "0px";
				toggleStatus = 1;
			}
		}