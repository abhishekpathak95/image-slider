let scrollcontainer=document.querySelector(".gallery");
let backBtn=document.querySelector("#backbtn");
let nextBtn=document.querySelector("#nextbtn");

scrollcontainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
})

backBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft -= 300;
})
nextBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft += 300;
})