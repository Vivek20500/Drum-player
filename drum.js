var buttonNo=document.querySelectorAll(".block-two .letter").length;
for(var i=0;i<buttonNo;i++){
    document.querySelectorAll(".block-two .letter")[i].addEventListener("click",beat);
}
document.addEventListener( "keydown" , keyb);
function beat(){
    var inner=this.innerHTML;
    switch (inner) {
        case "S":
            var sound=new Audio("crash.mp3")
            sound.play();
            break;
        case "D":
            var sound=new Audio("tom-3.mp3")
            sound.play();
            break;
        case "F":
            var sound=new Audio("tom-1.mp3")
            sound.play();
            break;
        case "G":
            var sound=new Audio("kick-bass.mp3")
            sound.play();
            break;
        case "H":
            var sound=new Audio("tom-2.mp3")
            sound.play();
            break;
        case "J":
            var sound=new Audio("tom-4.mp3")
            sound.play();
            break;
        case "K":
            var sound=new Audio("snare.mp3")
            sound.play();
            break;
    }
}

function keyb(e){
    switch (e.code) {
        case "KeyS":
            var sound=new Audio("crash.mp3")
            sound.play();
            break;
        case "KeyD":
            var sound=new Audio("tom-3.mp3")
            sound.play();
            break;
        case "KeyF":
            var sound=new Audio("tom-1.mp3")
            sound.play();
            break;
        case "KeyG":
            var sound=new Audio("kick-bass.mp3")
            sound.play();
            break;
        case "KeyH":
            var sound=new Audio("tom-2.mp3")
            sound.play();
            break;
        case "KeyJ":
            var sound=new Audio("tom-4.mp3")
            sound.play();
            break;
        case "KeyK":
            var sound=new Audio("snare.mp3")
            sound.play();
            break;
    }
}