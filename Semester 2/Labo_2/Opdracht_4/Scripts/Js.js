
const setup = () => {
    let btnVerander = document.getElementById("opschrift")

    btnVerander.addEventListener("click", veranderTekst);

}
const veranderTekst = () => {
    document.getElementById("txtOutput").innerHTML = "Nieuwe tekst";
};
window.addEventListener('load',setup);

