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