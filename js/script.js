const botonMenu = document.querySelector(".material-symbols-outlined");

const contenidoMenu = document.querySelector(".contenidoMenu");



botonMenu.addEventListener("click", () => {

    contenidoMenu.classList.toggle("mostrar");

});




const blocks = document.querySelectorAll('.blocks_ind');


blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
        block.classList.add("transform");
        
    });

    block.addEventListener("mouseout", () => {
        block.classList.remove("transform");
    });
});

const botonSumit = document.querySelector(".enviar");


if (botonSumit) {
    botonSumit.addEventListener('click', function () {
    alert("Formulario enviado")
    });
}


