var counter = 0;

document.querySelector("#picchio").addEventListener("ontouchstart", function mouseState(e) {
    if (e.type == "mousedown") {
        
        document.querySelector("#io").src = "imagearr.png";
        counter +=1;
        if (counter=1){
            document.querySelector("#display").innerHTML="/Ahia/";
        }
    }

    else{
        document.querySelector("#io").src = "image1.png"
    }
});

document.querySelector("#picchio").addEventListener("ontouchend", function mouseState(e) {
    if (e.type == "mousedown") {
        document.querySelector("#io").src = "imagearr.png";
    }

    else{
        document.querySelector("#io").src = "image1.png";
    }
});