
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
        divFormAñadir.classList.add("block");
        setTimeout(() => {
            divFormAñadir.classList.add("active");
        }, 0);


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
        divFormAñadir.classList = "";
        divOpacar.classList = "";
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
    const formActualizar = document.querySelector("#divActualizar form")
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
        input.type = "text";
        input.value = filaActualizar.childNodes[i].innerText;
        formActualizar.appendChild(input);
    }


    buttonActualizar.type = "button";
    buttonActualizar.setAttribute("onclick", "editarRegAluFinal()");
    formActualizar.id = filaActualizar.id + "F";
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
    let inputsActualizar = document.querySelectorAll("#divActualizar form input");
    let filaActualizarSucia = document.querySelector("#divActualizar form").id.split("F")[0];
    let filaActualizarOk = document.getElementById(filaActualizarSucia);
    let contador = 0;
    let valuesInputs = [];


    for (let valor of inputsActualizar) {
        valuesInputs[contador] = valor.value;
        contador++;
    }

    contador = 0;

    for (let i = 1; i < filaActualizarOk.childNodes.length; i++) {
        filaActualizarOk.childNodes[i].textContent = valuesInputs[contador];
        contador++;
    }

}


/*PESTAÑA PROFESOR*/
function borrarRegistro() {
    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            let filaBorrar = document.getElementById("tr" + checkBoxs[i].id);
            filaBorrar.remove();
        }
    }
}

const botonBorrar = document.getElementById("borrarAluProf");
botonBorrar.addEventListener("click", borrarRegistro);


function abrirAñadirAlu(accion) {
    const divFormAñadir = document.getElementById("infoAlumno");
    const boton = document.getElementById("añadirEditarAlu");


    if (accion === "editar") {

        const checkBoxs = document.querySelectorAll("#bodyTablaAlu input[type='checkbox']");
        let nombAluDiv = document.getElementById("nombAluInfo");
        let nombAluTabla;
        let idCheckbox;

        for (let i = 0; i < checkBoxs.length; i++) {
            if (checkBoxs[i].checked) {
                idCheckbox = checkBoxs[i].id;
            }
        }

        let idFilaAlu = "tr" + idCheckbox;
        nombAluTabla = document.querySelector(`tr#${idFilaAlu} td.nombre`).innerText;
        console.log(nombAluTabla);
        nombAluDiv.value = nombAluTabla;
        boton.classList = "";
        boton.innerText = "Editar alumno";

    } else if (accion === "añadir") {
        const valueInputs = document.querySelectorAll("#infoAlumno form input");

        for (let i = 0; i < valueInputs.length; i++) {
            valueInputs[i].value = "";
        }
        boton.classList = "";
        boton.innerText = "Añadir alumno";
    } else if (accion === "ver") {
        console.log("ver");
        document.getElementById("añadirEditarAlu").classList.add("none");
    }

    divFormAñadir.classList.toggle("block");

    setTimeout(() => {
        divFormAñadir.classList.add("active");
    }, 0);
}


function añadirEditarAlu() {
    const bodyTablaAlu = document.getElementById("bodyTablaAlu");
    const textoBoton = document.getElementById("añadirEditarAlu").innerText;
    const divAñadirEditar = document.getElementById("infoAlumno");
    let nombreAlu;
    if (textoBoton === "Añadir alumno") {
        nombreAlu = document.getElementById("nombAluInfo").value;
        const trNuevo = document.createElement("tr");
        const tdCheck = document.createElement("td");
        const inputCheck = document.createElement("input");
        inputCheck.type = "checkbox";
        const tdImg = document.createElement("td");
        const img = document.createElement("img");
        img.src = "./static/img/otras/alumno.png";
        const tdNomb = document.createElement("td");
        tdNomb.innerText = nombreAlu;

        tdCheck.appendChild(inputCheck);
        tdImg.appendChild(img);
        trNuevo.appendChild(tdCheck);
        trNuevo.appendChild(tdImg);
        trNuevo.appendChild(tdNomb);
        bodyTablaAlu.prepend(trNuevo);


    } else if (textoBoton === "Editar alumno") {
        const checkBoxs = document.querySelectorAll("#bodyTablaAlu input[type='checkbox']");
        let idCheckbox;


        for (let i = 0; i < checkBoxs.length; i++) {
            if (checkBoxs[i].checked) {
                idCheckbox = checkBoxs[i].id;
            }
        }

        let idFilaAlu = "tr" + idCheckbox;
        nombreAlu = document.querySelector("#infoAlumno form #nombAluInfo").value;
        document.querySelector(`tr#${idFilaAlu} td.nombre`).innerText = nombreAlu;





    }

    divAñadirEditar.classList = "";
}

const botonAñadirEditar = document.getElementById("añadirEditarAlu");
botonAñadirEditar.addEventListener("click", añadirEditarAlu);