const setup = () => {

    trigram()
    deVervangen()



}

const trigram = () => {
    const woord = "onoorbaar";
    for (let i = 0; i <= woord.length - 3; i++) {
        let trigram = woord.slice(i, i + 3);
        console.log(trigram);
    }
}
const deVervangen =() =>{
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let woorden = "";
    let woord = "";

    for (let i = 0; i <= zin.length; i++) {

        if (zin[i] === " " || i === zin.length) {

            if (woord === "de") {
                woorden += "het ";
            } else {
                woorden += woord + " ";
            }

            woord = "";
        } else {
            woord += zin[i];
        }
    }

    console.log(woorden.trim());
}
window.addEventListener('load',setup);