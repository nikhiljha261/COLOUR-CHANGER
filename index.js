const color=["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const text=document.querySelector(".color");


btn.addEventListener("click",function(){
    const randomindex=getrandomindex();
    document.body.style.background=color[randomindex];
    text.textContent=color[randomindex];
})

function getrandomindex(){
    return Math.floor(Math.random()*color.length);
}