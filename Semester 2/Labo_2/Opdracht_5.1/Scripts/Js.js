const setup = () => {

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
window.addEventListener('load',setup);

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let outpuut=document.getElementById("txtOutput")
    let tekst = txtInput.value;
    outpuut.innerHTML = tekst;

}