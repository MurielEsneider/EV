const nombreInput = document.getElementById("nombre");
const platoInput = document.getElementById("plato");
const precioInput = document.getElementById("precio");
const resultado = document.getElementById("resultado");
const botonAgregar = document.getElementById("agregar");

botonAgregar.addEventListener('click', () => {
    const nombre = nombreInput.value;
    const plato = platoInput.value;
    const precio = parseFloat(precioInput.value /*el parseFloat convierte el precio en decimales */);

    /* Validar que el precio sea un número  */
    nombre && plato && !isNaN(precio) && (resultado.innerText = 
        "El cliente "+ nombre + "ha ordenado el plato" + plato + "con un precio de $" + precio.toFixed(2));
    
}
)
