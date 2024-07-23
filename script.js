var btn2=document.querySelector(".btn2");
var h5=document.querySelector("h5");
var btn1=document.querySelector(".btn1");
var img=document.querySelector(".profile");
var relation=document.querySelector("h5");

btn2.addEventListener("click",function(){
    h5.innerText="Friend Now!";
    h5.style.transition="0.5s";
    btn1.style.backgroundColor="#3699fd";
    btn2.style.backgroundColor="#a1a1a1";
    btn1.style.transition="0.2s";
    btn2.style.cursor="default";
    btn1.style.cursor="pointer";
    img.style.border="5px solid #3699fd";
    img.style.padding="5px";
    img.style.transition="0.2s";
    relation.style.color="hsl(208, 99%, 55%)";
})
btn1.addEventListener("click",function(){
    h5.innerText="Stranger";
    // h5.style.transition="0.5s";
    btn2.style.backgroundColor="#3699fd";
    btn1.style.backgroundColor="#a1a1a1";
    btn1.style.cursor="default";
    btn1.style.transition="0.2s";
    btn2.style.cursor="pointer";
    img.style.border="none";
    img.style.transition="0.3s";
    img.style.padding="0px";  
    relation.style.color="rgb(217, 18, 18)";
    
})
