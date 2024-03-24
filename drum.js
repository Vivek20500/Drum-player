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
            anim(inner);
            break;
        case "D":
            var sound=new Audio("tom-3.mp3")
            sound.play();
            anim(inner);
            break;
        case "F":
            var sound=new Audio("tom-1.mp3")
            sound.play();
            anim(inner);
            break;
        case "G":
            var sound=new Audio("kick-bass.mp3")
            sound.play();
            anim(inner);
            break;
        case "H":
            var sound=new Audio("tom-2.mp3")
            sound.play();
            anim(inner);
            break;
        case "J":
            var sound=new Audio("tom-4.mp3")
            sound.play();
            anim(inner);
            break;
        case "K":
            var sound=new Audio("snare.mp3")
            sound.play();
            anim(inner);
            break;
    }
}

function keyb(e){
    switch (e.code) {
        case "KeyS":
            var sound=new Audio("crash.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyD":
            var sound=new Audio("tom-3.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyF":
            var sound=new Audio("tom-1.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyG":
            var sound=new Audio("kick-bass.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyH":
            var sound=new Audio("tom-2.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyJ":
            var sound=new Audio("tom-4.mp3")
            sound.play();
            animkey(e);
            break;
        case "KeyK":
            var sound=new Audio("snare.mp3")
            sound.play();
            animkey(e);
            break;
    }
}

function anim(keey){
    document.querySelector("."+keey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + keey).classList.remove("pressed")},100);
}

function animkey(e){
    var cap=e.key.toUpperCase();
    document.querySelector('.'+cap).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+cap).classList.remove("pressed")},100);
}
