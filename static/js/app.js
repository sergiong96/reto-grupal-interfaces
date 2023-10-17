
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
            let filaBorrar = document.getElementById(checkBoxs[i].id + "tr");
            filaBorrar.remove();
        }

    }

}

function editarRegistro() {
    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            let filaActualizar = document.getElementById(checkBoxs[i].id + "tr");

            for (let j = 0; j < filaActualizar.childNodes.length; j++) {
                if (filaActualizar.childNodes[j].nodeName === "#text") {
                    filaActualizar.childNodes[j].remove();
                }
            }
            //CONTINUAR, NODELIST LIMPIA DE TEXTO. FALTA CREAR UN DIV, INSERTARLE UN FORM, A ESTE INSERTARLE INPUTS CON LOS VALORES DE LA FILA SELECCIONADA Y ACTUALIZAR
            let div = document.createElement("div");
            let form = document.createElement("form");
            div.className = "divActualizar";


            for (let i = 1; i < filaActualizar.childNodes.length; i++) {
                let input = document.createElement("input");
                input.innerText = filaActualizar.childNodes[i].innerText;
                form.appendChild(input);
            }
            div.appendChild(form);
        }
    }
}