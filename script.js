document.querySelector("#picchio").addEventListener("mousedown", function mouseState(e) {
    if (e.type == "mousedown") {
        
        document.querySelector("#io").src = "imagearr.png";
    }

    else{
        document.querySelector("#io").src = "image1.png"
    }
});

document.querySelector("#picchio").addEventListener("mouseup", function mouseState(e) {
    if (e.type == "mousedown") {
        document.querySelector("#io").src = "imagearr.png";
    }

    else{
        document.querySelector("#io").src = "image1.png";
    }
});