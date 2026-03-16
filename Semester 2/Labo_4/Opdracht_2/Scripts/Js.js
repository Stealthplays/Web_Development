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