const setup = () => {

    let subString = document.getElementById("subString");
    subString.addEventListener("click", subStringMethod);
}
window.addEventListener('load',setup);

function  subStringMethod() {
    let txtInput = document.getElementById("input").value;
    let start=document.getElementById("veld1").value
    let end=document.getElementById("veld2").value
    let output=document.getElementById("output")
    output.innerText = txtInput.substring(start, end);


}
