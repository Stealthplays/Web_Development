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