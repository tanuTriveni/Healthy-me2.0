var num=document.querySelectorAll(".drum").length;
// for(var i=0;i<num;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",new1); 
// }
// // document.querySelector("set").addEventListener("click",new1);

// function new1() {
//     var audio =new Audio("sounds/tom-1.mp3");
//     audio.play();
//     ////alert("C:\Users\H P\Downloads\triveni_html\.vscode\kotglr\sounds\tom-1.mp3");
// }
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bthtml=this.innerHTML;
        makesound(bthtml);
        buttonami(bthtml);
  //  this.style.color="white";
    }); 
}
document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonami(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
            default: console.log(bthtml);

 
        }
        
}
function buttonami(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");},100);}

