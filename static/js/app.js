/*VARIABLES*/
/*Variables Index*/
const botonValidarAlu = document.querySelector("#heroIndex section button[data-type='validarAlumno']");
const botonValidarProf = document.querySelector("#heroIndex section button[data-type='validarProfesor']");


/*Variables Alumno*/
const enlacesNavAlu = document.querySelectorAll("#barraLateralAlu li[data-target]");
const botonAbrirAñadirAlu = document.querySelector("#seccionTabla #botonesEdicion button[data-type='abrirAñadir']");
const botonBorrarAlumno = document.querySelector("#seccionTabla #botonesEdicion div button[data-type='eliminar']");
const botonEditarAlumno = document.querySelector("#seccionTabla #botonesEdicion div button[data-type='editar']");
const botonInsertarAlu = document.querySelector("#divAñadir form #buttonAñadir");
const botonCerrarForm = document.querySelector("#divAñadir button[data-type='cerrar']");
const botonCerrarActualizar = document.querySelector("#divActualizar button[data-type='cerrar']");
const navCerrarSesionAlu = document.querySelector("#barraLateralAlu li[data-direction]");

/*Variables Profesor*/
const enlacesNavProf = document.querySelectorAll("#barraLateralProf li[data-target]");
const botonBorrar = document.querySelector("#heroVistaProfesor #tablaAlumnos div button[data-type='borrar']");
const abrirEditarAlumno = document.querySelector("#heroVistaProfesor #tablaAlumnos div button[data-type='editar']");
const abrirAñadirAlumno = document.querySelector("#heroVistaProfesor #tablaAlumnos button[data-type='añadir']");
const abrirVerAlumno = document.querySelectorAll("#heroVistaProfesor #tablaAlumnos #bodyTablaAlu td img");
const navCerrarSesion = document.querySelector("#barraLateralProf li[data-direction]");



/*EVENTOS*/
/*Eventos Index*/
if (botonValidarAlu) {
    botonValidarAlu.addEventListener("click", validarAlumno);
}

if (botonValidarProf) {
    botonValidarProf.addEventListener("click", validarProfesor);
}


/*Eventos Alumno*/
if (enlacesNavAlu) {
    enlacesNavAlu.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            let idMostrar = event.currentTarget.getAttribute("data-target");
            let divMostrar = document.getElementById(idMostrar);
            pestañas(divMostrar);
        });
    });
}

if (botonInsertarAlu) {
    botonInsertarAlu.addEventListener("click", añadirEntradaAluFinal);
}
if (botonCerrarActualizar) {
    botonCerrarActualizar.addEventListener("click", cerrarFormReg);
}
if (botonBorrarAlumno) {
    botonBorrarAlumno.addEventListener("click", borrarRegistroAlu);
}
if (botonEditarAlumno) {
    botonEditarAlumno.addEventListener("click", abrirEditarRegAlu);
}
if (botonAbrirAñadirAlu) {
    botonAbrirAñadirAlu.addEventListener("click", abrirAñadirEntradaAlu);
}
if (botonCerrarForm) {
    botonCerrarForm.addEventListener("click", cerrarFormAñadirAlu);
}


/*Eventos Profesor*/
if (enlacesNavProf) {
    enlacesNavProf.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            let idMostrar = event.currentTarget.getAttribute("data-target");
            let divMostrar = document.getElementById(idMostrar);
            pestañas(divMostrar);
        });
    });
}


if (botonBorrar) {
    botonBorrar.addEventListener("click", borrarRegistroProf);
}

if (abrirEditarAlumno) {
    abrirEditarAlumno.addEventListener("click", () => {
        abrirAñadirAlu('editar');
    });
}

if (abrirAñadirAlumno) {
    abrirAñadirAlumno.addEventListener("click", () => {
        abrirAñadirAlu('añadir');
    });
}

if (abrirVerAlumno) {
    abrirVerAlumno.forEach((imagen) => {
        imagen.addEventListener("click", () => {
            abrirAñadirAlu('ver');
        });
    });
}

if (navCerrarSesion) {
    navCerrarSesion.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}

if (navCerrarSesionAlu) {
    navCerrarSesionAlu.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}



/*FUNCIONES*/
/*Funciones Index*/
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


/*Funciones Alumno*/
//Nueva entrada Diario
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

function cerrarFormAñadirAlu() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");

    if (divFormAñadir.classList.contains("active") && divOpacar.classList.contains("active")) {
        divFormAñadir.classList = "";
        divOpacar.classList = "";
    }
}

//Eliminar entrada diario
function borrarRegistroAlu() {
    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            let filaBorrar = document.getElementById(checkBoxs[i].id + "tr");
            filaBorrar.remove();
        }
    }
}

//Editar entrada diario
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

function cerrarFormReg() {
    console.log("cerrar");
    const divActualizar = document.getElementById("divActualizar");
    const divOpacar = document.getElementById("opacar");

    if (divActualizar.classList.contains("active") && divOpacar.classList.contains("active")) {
        divActualizar.classList = "";
        divOpacar.classList = "";
    }
}




/*Funciones Profesor*/
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
        nombAluDiv.value = nombAluTabla;
        boton.classList = "";
        boton.innerText = "Editar alumno";
        boton.addEventListener("click", añadirEditarAlumnoProf);

    } else if (accion === "añadir") {

        boton.classList = "";
        boton.innerText = "Añadir alumno";
        boton.addEventListener("click", añadirEditarAlumnoProf);

    } else if (accion === "ver") {
        document.getElementById("añadirEditarAlu").classList.add("none");
    }

    divFormAñadir.classList.toggle("block");

    setTimeout(() => {
        divFormAñadir.classList.add("active");
    }, 0);
}

function añadirEditarAlumnoProf() {
    const bodyTablaAlu = document.getElementById("bodyTablaAlu");
    const textoBoton = document.getElementById("añadirEditarAlu").innerText;
    const divAñadirEditar = document.getElementById("infoAlumno");
    const checkBoxs = document.querySelectorAll("#bodyTablaAlu input[type='checkbox']");
    let idCheckbox;
    let nombreAlu;

  


    if (textoBoton === "Añadir alumno") {

        nombreAlu = document.getElementById("nombAluInfo").value;
        const trNuevo = document.createElement("tr");
        const tdCheck = document.createElement("td");
        const inputCheck = document.createElement("input");
        inputCheck.type = "checkbox";
        inputCheck.id="A6";
        trNuevo.id = "tr" + inputCheck.id;
        const tdImg = document.createElement("td");
        const img = document.createElement("img");
        img.src = "../static/img/otras/alumno.png";
        const tdNomb = document.createElement("td");
        tdNomb.innerText = nombreAlu;

        tdCheck.appendChild(inputCheck);
        tdImg.appendChild(img);
        trNuevo.appendChild(tdCheck);
        trNuevo.appendChild(tdImg);
        trNuevo.appendChild(tdNomb);
        bodyTablaAlu.prepend(trNuevo);


    } else if (textoBoton === "Editar alumno") {
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

//Eliminar alumno
function borrarRegistroProf() {
    let checkBoxs = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            let filaBorrar = document.getElementById("tr" + checkBoxs[i].id);
            filaBorrar.remove();
        }
    }
}

function pestañas(pestañaMostrar) {
    const contenidos = document.querySelectorAll(".contenido");
    const pestañas = document.querySelectorAll("aside nav li");
    const pestañaActiva = document.querySelector(`aside nav li[data-target='${pestañaMostrar.id}']`);


    for (let pestaña of pestañas) {
        pestaña.classList.remove("active");
    }

    for (let contenido of contenidos) {
        contenido.classList.remove("active");
    }

    if (!pestañaMostrar.classList.contains("active")) {
        pestañaMostrar.classList.add("active")
    }

    if (!pestañaActiva.classList.contains("active")) {
        pestañaActiva.classList.add("active")
    }

}
