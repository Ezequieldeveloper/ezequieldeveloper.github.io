/*const cursorOut= document.querySelector("[data-cursor-out]");
const cursorInline= document.querySelector("[data-cursor-inline]");
window.addEventListener("mousemove", function (e){
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorOut.style.left = '${posX}px';
    cursorOut.style.top ='${posY}px';

    //cursorInline.style.left = '${posX}px';
    //cursorInline.style.top = '${posY}px';

    cursorInline.animate({
        left: '${posX}px',
        top: '${posY}px'
    }, {duration: 500, fill: "forwards"});
});*/


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})