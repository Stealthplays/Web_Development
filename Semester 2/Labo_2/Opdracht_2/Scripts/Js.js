const familieLeden=["a","b","c","d","e"];

console.log(familieLeden.length);
for (let i=0;i<familieLeden.length;i+=2){
    console.log(familieLeden[i]);
}

 function geefNaam(gegevenNaam){

    familieLeden.push(gegevenNaam)
}
gegevenNaam=prompt("Enter your extra name","f")
geefNaam(gegevenNaam);
    console.log(familieLeden.join("-"));



