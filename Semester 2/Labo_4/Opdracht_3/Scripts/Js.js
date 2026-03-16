
const setup = () => {
    toonResultaat()



}


const toonResultaat=() => {

    let roker = document.getElementById("roker").checked;
    console.log("Roker:", roker);

    let talen = document.getElementsByName("taal");

    for (let taal of talen) {
        if (taal.checked) {
            console.log("Moedertaal:", taal.value);
        }
    }

    let buurland = document.getElementById("buurland");
    console.log("Buurland:", buurland.options[buurland.selectedIndex].text);

    let bestelling = document.getElementById("bestelling");

    for (let optie of bestelling.options) {
        if (optie.selected) {
            console.log("Besteld:", optie.text);
        }
    }

}
window.addEventListener('load',setup);
