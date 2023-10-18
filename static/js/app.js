
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


function abrirAñadirEntradaAlu() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");

    if (!divFormAñadir.classList.contains("active") && !divOpacar.classList.contains("active")) {
        divFormAñadir.classList.add("active");

        divOpacar.classList.add("block");
        setTimeout(() => {
            divOpacar.classList.add("active");
        }, 0);

    }

}

function cerrarFormAñadir() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");
    if (divFormAñadir.classList.contains("active") && divOpacar.classList.contains("active")) {
        divFormAñadir.classList.remove("active");
        divOpacar.classList.remove("active");
    }
}


function añadirEntradaAluFinal() {
    let fecha = document.getElementById("fechaIn").value;
    let tipo = document.getElementById("tipoIn").value;
    let horas = document.getElementById("horasIn").value;
    let actividades = document.getElementById("activIn").value;
    let observaciones = document.getElementById("obserIn").value;
    let idTrAnterior = document.querySelector("tbody tr");
    idTrAnterior = parseInt(idTrAnterior.id.substring(1, 2));
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.id = "R" + parseInt(idTrAnterior + 1);

    let arrayInsert = [fecha, tipo, horas, actividades, observaciones];

    const elementoInsertar = document.getElementById("cuerpoTabla");
    let tr = document.createElement("tr");
    tr.id = inputCheck.id + "tr";

    let td = document.createElement("td");
    td.appendChild(inputCheck);
    tr.appendChild(td);

    for (let i = 0; i < arrayInsert.length; i++) {
        td = document.createElement("td");
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

function abrirEditarRegAlu() {
    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    const formActualizar = document.getElementById("formActualizar");
    formActualizar.innerHTML = "";
    const divOpacar = document.getElementById("opacar");
    const buttonActualizar = document.createElement("button");
    buttonActualizar.innerText = "Actualizar registro";
    let filaActualizar;

    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            filaActualizar = document.getElementById(checkBoxs[i].id + "tr");

            for (let j = 0; j < filaActualizar.childNodes.length; j++) {
                if (filaActualizar.childNodes[j].nodeName === "#text") {
                    filaActualizar.childNodes[j].remove();
                }
            }
        }
    }

    for (let i = 1; i < filaActualizar.childNodes.length; i++) {
        let input = document.createElement("input");
        input.value = filaActualizar.childNodes[i].innerText;
        formActualizar.appendChild(input);
    }

    buttonActualizar.setAttribute("onclick", "editarRegAluFinal()");

    formActualizar.appendChild(buttonActualizar);

    if (!divOpacar.classList.contains("active")) {
        divOpacar.classList.add("block");
        setTimeout(() => {
            divOpacar.classList.add("active");
        }, 0);
    }

    divActualizar.classList.add("block");

    setTimeout(() => {
        divActualizar.classList.add("active");
    }, 0);

}


function cerrarFormReg() {
    const divActualizar = document.getElementById("divActualizar");
    const divOpacar = document.getElementById("opacar");

    if (divActualizar.classList.contains("active") && divOpacar.classList.contains("active")) {
        divActualizar.classList = "";
        divOpacar.classList = "";
    }
}

function editarRegAluFinal() {
    let inputsActualizar = document.querySelectorAll("#formActualizar input");
    console.log(inputsActualizar);

}