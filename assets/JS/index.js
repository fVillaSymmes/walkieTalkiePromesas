// Este código permite enviar solo un mensaje a cada destinatario. Será necesario enviarle a otro para poder enviar otro mensaje

// $("#botonEnviar").click(enviar)

// let usuario = []

// async function enviar() {
//     const mensaje = $("#mensaje").val()
//     const destinatario = $("#destinatario").val()
//     await envioMsg(mensaje, destinatario);
//     console.log(`Nombres baneados de enviar mensaje y su mensaje: ${usuario}`);
// }

// function envioMsg(mensaje, destinatario) {
//         new Promise((resolve) => {
//         const respuesta = $("#respuesta")
//         if(!usuario.includes(destinatario)) {
//             resolve(true);
//             usuario.push(destinatario)
//             respuesta.attr("class", "alert alert-success")
//             respuesta.text("Mensaje enviado");
//             respuesta.attr('role', 'alert')
//         } else {
//             respuesta.attr("class", 'alert alert-danger')
//             respuesta.attr('role', 'alert')
//             respuesta.text(`Ya has enviado un mensaje. No puedes enviar otro.`);
//         }
//     })
// }


// Este código es el que resuelve el drilling, el código comentado son pruebas

$("#botonEnviar").click(enviar)

let promesa = null

async function enviar() {
    const mensaje = $("#mensaje").val()
    const destinatario = $("#destinatario").val()
    console.log(promesa);
    await envioMsg(mensaje, destinatario);
    console.log(promesa);
}

function envioMsg(mensaje, destinatario) {
    promesa = new Promise((resolve) => {
        const respuesta = $("#respuesta")
        if(!promesa) {
            resolve(true);
            respuesta.attr("class", "alert alert-success text-center ")
            respuesta.text("Mensaje enviado");
            respuesta.attr('role', 'alert')
        } else {
            respuesta.attr("class", 'alert alert-danger text-center')
            respuesta.attr('role', 'alert')
            respuesta.text(`Ya has enviado un mensaje. No puedes enviar otro.`);
        }
    })
}