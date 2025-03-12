//PARTE  1

const destinos = [
    { id: 1, nombre: "Zúrich, Suiza", descripcion: "Patrimonio cultural y fábricas de chocolate.", visitas: 1500 },
    { id: 2, nombre: "Niza, Francia", descripcion: "Encanto mediterráneo y carnaval famoso.", visitas: 2300 },
    { id: 3, nombre: "Londres, Reino Unido", descripcion: "Monumentos históricos y vibrante cultura.", visitas: 3200 },
    { id: 4, nombre: "Isla de Wight, Reino Unido", descripcion: "Naturaleza y tranquilidad en una isla única.", visitas: 800 },
    { id: 5, nombre: "Sicilia, Italia", descripcion: "Historia, cocina y paisajes mediterráneos.", visitas: 1700 }
];

// Función para mostrar destinos en la página
function mostrarDestinosEnPagina(destinosFiltrados) {
    const contenedor = document.getElementById("lista-destinos");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    destinosFiltrados.forEach(destino => {
        const div = document.createElement("div");
        div.classList.add("destino-card");
        div.innerHTML = `
            <h3>${destino.nombre}</h3>
            <p>${destino.descripcion}</p>
            <p><strong>Visitas:</strong> ${destino.visitas}</p>
        `;
        contenedor.appendChild(div);
    });
}

// Mostrar todos los destinos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarDestinosEnPagina(destinos);
});


//MODO OSCURO:  Crear un botón o interruptor que permita alternar entre un modo claro y un modo oscuro para la web. 


const darkModeToggle = document.getElementById('darkModeToggle');
const body =document.body;

if (localStorage.getItem('darkMode') === "enabled"){
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML= '<i class="fas fa-moon"></i>';
    }
});


//Cambiar dinámicamente el estilo de un elemento al interactuar con él
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

//Mostrar imágenes en miniatura que al hacer clic se amplíen.

document.querySelectorAll('.destination img').forEach(img => {
    img.onclick = () => {
        let container = img.closest('.destination');
        let title = container.querySelector('h2');

        let previewOverlay = document.createElement('div');
        previewOverlay.classList.add('preview-overlay');

        let previewContent = document.createElement('div');
        previewContent.classList.add('preview-content');

        let previewImage = document.createElement('img');
        previewImage.src = img.src;

        let previewTitle= document.createElement('h2');
        previewTitle.innerText = title.innerText;

        let closeButton = document.createElement('span');
        closeButton.innerHTML = "&times;";
        closeButton.classList.add('close-preview');


        previewContent.appendChild(closeButton);
        previewContent.appendChild(previewImage);
        previewContent.appendChild(previewTitle);
        previewOverlay.appendChild(previewContent);

        document.body.appendChild(previewOverlay);

        closeButton.onclick = () => {
            document.body.removeChild(previewOverlay);
        };
    };
});




