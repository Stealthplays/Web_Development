const setup = () => {

changeparagraph();

}
    window.addEventListener('load',setup);

const changeparagraph = () => {

for (let i=0;i<document.getElementsByClassName("belangrijk").length;i++){
    let parah = document.getElementsByClassName("belangrijk")[i]; //is een soort array
    parah.classList.toggle("opvallend");
   parah.innerHTML = "<strong>Belangrijk</strong>";
    let parahOpvallend =document.getElementsByClassName("opvallend")[i];
    parahOpvallend.style.color="red";
}

}