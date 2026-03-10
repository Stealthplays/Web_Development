
const hvlAns = () => {
   let zin = "De man van An geeft geen hand aan ambetante verwanten"
    zin =zin.toLowerCase()
    let aantal =0;
    for (let i=1;i<zin.length;i++){

       if( (zin[i-1]+zin[i])==="an"){

           aantal++
       }

       else {
           console.log("geen an")
       }
    }
    console.log(aantal);
}
window.addEventListener("load", hvlAns);