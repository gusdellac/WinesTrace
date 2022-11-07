const divEnter = document.querySelectorAll("[data-cards]");

divEnter.forEach((div)=>{
    div.addEventListener("mouseenter", (e)=>{
        div.firstElementChild.classList.add("cards_titulo-active");
    });

    div.addEventListener("mouseleave", (e)=>{
        div.firstElementChild.classList.remove("cards_titulo-active");
    });
});




