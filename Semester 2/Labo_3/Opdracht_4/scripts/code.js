const setup = () => {
    let buttons=document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", swap);
    }

}

const swap =()=>{
    let buttons=document.getElementsByTagName("button");
    event.currentTarget.classList.toggle("Special")
}
window.addEventListener("load", setup);