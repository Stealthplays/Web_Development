const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

update()
	// maak het blokje rood

}
const update = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let currentValue=document.getElementsByClassName("current");
	let value=sliders[0].value;
	let value1=sliders[1].value;
	let value2=sliders[2].value;
    currentValue[0].innerText=" "+value+"  ";
    currentValue[1].innerText=" "+value1+"   ";
    currentValue[2].innerText=" "+value2+"   ";
    colorDemos[0].style.backgroundColor=  "rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);