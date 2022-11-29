const itemServicios = document.querySelector("#menuNav-servicios");
const itemSobreNosotros = document.querySelector("#menuNav-sobre-nosotros");
const itemContacto = document.querySelector("#menuNav-contacto");

const botonMenuNav = document.querySelector("#btn-menu");

itemServicios.addEventListener("click", () => {
    botonMenuNav.checked = false;
});

itemSobreNosotros.addEventListener("click", () => {
    botonMenuNav.checked = false;
});

itemContacto.addEventListener("click", () => {
    botonMenuNav.checked = false;
});








