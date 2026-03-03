const setup = () => {
    let button = document.getElementsByTagName("button");

    button[0].addEventListener("click", calculate);





}
const calculate =() => {
        let row = document.getElementsByClassName("Row")
        let input =document.getElementsByClassName("Input")
        let price =document.getElementsByClassName("Price")
        let btw=document.getElementsByClassName("Btw")
        let total=document.getElementById("total")
        let grandTotal = 0;

        for (let i = 0; i < 3; i++) {
            let quantity = parseInt(input[i].value);
            let priceValue = parseInt(price[i].textContent);
            let btwValue = parseInt(btw[i].textContent);

            let subtotal = quantity * priceValue * (1 + btwValue / 100);

            row[i].innerText = subtotal.toFixed(2);

            grandTotal += subtotal;
        }
        total.innerText = grandTotal.toFixed(2);
    }
window.addEventListener("load", setup);