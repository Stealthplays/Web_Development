<<<<<<< HEAD
const setup = () => {
    gemeente();
}

const gemeente = () => {

    let gemeenten = [];

    while (true) {

        let invoer = prompt("Geef een gemeente in");

        if (invoer === null) {
            break;
        }

        if (invoer.toLowerCase() === "stop") {
            break;
        }

        gemeenten.push(invoer);
    }

    gemeenten.sort((a, b) => a.localeCompare(b));

    let select = document.getElementById("gemeenten");

    for (let i = 0; i < gemeenten.length; i++) {

        let option = document.createElement("option");
        option.textContent = gemeenten[i];

        select.appendChild(option);
    }
}

window.addEventListener("load", setup);
=======
let leeftijd = 34; let intrest = 0.12;
let isGevaarlijk=true;
let vandaag = new Date();
const print = () => {
    console.log(typeof leeftijd);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print)
}
window.addEventListener("load", print);
>>>>>>> 4ada04d5263d3794c68397adaea0f6657bd7d8c3
