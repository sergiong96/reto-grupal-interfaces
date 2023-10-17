
function validarProfesor() {
    let email = document.getElementById("emailP").value;
    let contraseña = document.getElementById("passP").value;
    const mensajeElement = document.getElementById("credencialesP");

    if (email === "profesor@cesurformacion.com" && contraseña === "1234") {
        window.location.href = "./vistaProfesor.html";
    } else {
        mensajeElement.innerText = "CREDENCIALES INCORRETAS";
    }
}

function validarAlumno() {
    let email = document.getElementById("emailA").value;
    let contraseña = document.getElementById("passA").value;
    const mensajeElement = document.getElementById("credencialesA");

    if (email === "alumno@cesurformacion.com" && contraseña === "5678") {
        window.location.href = "./vistaAlumno.html";
    } else {
        mensajeElement.innerText = "CREDENCIALES INCORRETAS";
    }

}


function añadirEntradaAlu() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");

    if (!divFormAñadir.classList.contains("active") && !divOpacar.classList.contains("active")) {
        divFormAñadir.classList.add("active");
        divOpacar.classList.add("active");
    }

}

function cerrarForm() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");
    if (divFormAñadir.classList.contains("active") && divOpacar.classList.contains("active")) {
        divFormAñadir.classList.remove("active");
        divOpacar.classList.remove("active");
    }
}


function insertarEntrada() {
    let fecha = document.getElementById("fechaIn").value;
    let tipo = document.getElementById("tipoIn").value;
    let horas = document.getElementById("horasIn").value;
    let actividades = document.getElementById("activIn").value;
    let observaciones = document.getElementById("obserIn").value;

    let arrayInsert = [fecha, tipo, horas, actividades, observaciones];

    const elementoInsertar = document.getElementById("cuerpoTabla");
    let tr = document.createElement("tr");

    for (let i = 0; i < arrayInsert.length; i++) {
        let td = document.createElement("td");
        td.innerText = arrayInsert[i];
        tr.appendChild(td);
    }

    elementoInsertar.prepend(tr);

}

function borrarRegistro() {

    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            let idBorrar = document.getElementById(checkBoxs[i].id + "tr");
            idBorrar.remove();
        }

    }

}