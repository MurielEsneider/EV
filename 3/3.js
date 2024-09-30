let reserva = [];

function hacerReserva() {
    const cliente = document.getElementById("cliente").value; /* tomamos las id desde el html */
    const fecha = document.getElementById("fecha").value; 
    const habitacion = document.getElementById("habitacion").value;

    cliente && fecha && habitacion
        reserva = {
            cliente: cliente,
            fecha: fecha,
            habitacion: habitacion
        };
        document.getElementById("resultado").innerText =
         "Reserva hecha para "+ cliente +"en la habitación"+habitacion 
         +"para el día "+fecha;
    
}

function cancelarReserva() {
    if (Object.keys(reserva).length > 0) /* se usa para verificar reserva */
     {
        reserva = {}; /* si no está vacío */
        document.getElementById("resultado").innerText = "La reserva ha sido cancelada.";
    } else {
        alert("No hay reservas para cancelar.");
    }
}
