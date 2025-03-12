
document.addEventListener("DOMContentLoaded", function(){
    //Seleccionamos los elementos

    const boton = document.getElementById("boton");
    const parrafo = document.getElementById("parrafo");

    //evento para cambiar el color del boton al pasar el mouse

    boton.addEventListener("mouseover", function(){
        boton.style.background ="rgb(255, 153, 0)";
    });

    boton.addEventListener("mouseout", function(){
        boton.style.backgroundColor = "black";
    });


});