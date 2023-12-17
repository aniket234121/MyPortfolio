$(document).ready(function(){
    var $scramble=$(".scramble");
    $scramble.scramble(1800,20,"alphabet",true);
    setTimeout(function(){
        let loader=document.querySelector(".loader");
        loader.style.display='none';
    },2800)
})

var tl=gsap.timeline();
tl.to(".box",{
    opacity:0,
    duration:1,
    y:"-300",
    ease:"Expo.easeInOut",
    delay:2

},"a")
tl.to(".loader",{
    opacity:0,
    duration:1,
    ease:"Expo.easeInOut",
    delay:2
},"a")
