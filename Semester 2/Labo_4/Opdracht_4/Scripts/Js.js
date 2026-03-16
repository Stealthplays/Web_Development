const setup = () => {

    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", valideer);

}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const valideer = () => {

    let velden = {
        voornaam: document.getElementById("voornaam"),
        familienaam: document.getElementById("familienaam"),
        geboorte: document.getElementById("geboorte"),
        email: document.getElementById("email"),
        kinderen: document.getElementById("kinderen")
    };

    let errors = {
        voornaam: document.getElementById("errVoornaam"),
        familienaam: document.getElementById("errFamilienaam"),
        geboorte: document.getElementById("errGeboorte"),
        email: document.getElementById("errEmail"),
        kinderen: document.getElementById("errKinderen")
    };

    let geldig = true;

// reset
    for (let key in velden) {
        errors[key].textContent = "";
        velden[key].classList.remove("invalid");
    }

    let v = velden.voornaam.value.trim();
    let f = velden.familienaam.value.trim();
    let g = velden.geboorte.value.trim();
    let e = velden.email.value.trim();
    let k = velden.kinderen.value.trim();

    function fout(veld, boodschap){
        errors[veld].textContent = boodschap;
        velden[veld].classList.add("invalid");
        geldig = false;
    }

    if (v.length > 30) fout("voornaam","max. 30 karakters");

    if (f === "") fout("familienaam","verplicht veld");
    else if (f.length > 50) fout("familienaam","max 50 karakters");

    if (g === "") fout("geboorte","verplicht veld");
    else if (g.length !== 10 || g[4] !== "-" || g[7] !== "-")
        fout("geboorte","formaat is niet jjjj-mm-dd");

    let delen = e.split("@");
    if (e === "") fout("email","verplicht veld");
    else if (delen.length !== 2 || delen[0].length < 1 || delen[1].length < 1)
        fout("email","geen geldig email adres");

    if (!isGetal(k) || k < 0) fout("kinderen","is geen positief getal");
    else if (k >= 99) fout("kinderen","is te vruchtbaar");

    if (geldig) alert("proficiat!");


}

window.addEventListener("load", setup);