<<<<<<< HEAD

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
=======
const setup = () => {
    let button = document.getElementById("submit");

   // button.addEventListener("click", printSpatie);
    button.addEventListener("click",printSpatie)
}
const printSpatie = () => {
    event.preventDefault();
   let zin = document.getElementById("spatie").value.replace(/\s/g, "").split("").join(" ")
    console.log(zin)


}
const printSpatie2= () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let zoek = "an";
    let teller = 0;
    let positie = tekst.indexOf(zoek);

    while (positie !== -1) {
        teller++;
        positie = tekst.indexOf(zoek, positie + 1);
    }

    console.log("Aantal keer 'an': " + teller);
}


window.addEventListener("load", setup);
>>>>>>> 4ada04d5263d3794c68397adaea0f6657bd7d8c3
