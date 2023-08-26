var counter = 0;

document.querySelector("#picchio").addEventListener("onclick", change);

function change() {
    counter +=1;
    document.querySelector("#io").classList.toggle("new-class");
if (counter==1){
    document.querySelector("#display").innerHTML = '"Ahia..."';
}

else if(counter ==5){
    document.querySelector("#display").innerHTML = '"Amore..."';
}

else if(counter ==10){
    document.querySelector("#display").innerHTML = '"Mi fai male..."';
}

else if(counter ==15){
    document.querySelector("#display").innerHTML = '"Eh vabbè..."';
}
else if(counter ==20){
    document.querySelector("#display").innerHTML = '"Ok,va bene..."';
}
else if(counter ==25){
    document.querySelector("#display").innerHTML = '"Ah, continuiamo...? Ok"';
}
else if(counter ==30){
    document.querySelector("#display").innerHTML = '"Va bene amore, continuiamo"';
}

}