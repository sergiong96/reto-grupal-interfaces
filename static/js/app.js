/*VARIABLES*/
/*Variables Index*/
const botonValidarAlu = document.querySelector("#heroIndex section button[data-type='validarAlumno']");
const botonValidarProf = document.querySelector("#heroIndex section button[data-type='validarProfesor']");
const inputEnterAlu = document.querySelector("#heroIndex #passA");
const inputEnterProf = document.querySelector("#heroIndex #passP");

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
const btnAñadirEmpresa = document.querySelector("#empresasProf #infoEmpresas > button[data-type='añadir']");
const btnEditarEmpresa = document.querySelector("#empresasProf #infoEmpresas button[data-type='editar']");
const btnCerrarAñadir = document.querySelector("#infoEmpresas dialog#nuevaEmpresa button[data-type='cerrar']");
const btnAsignarEmpresa = document.querySelector("#heroVistaProfesor #empresasAsignadas form button");
const btnVerEditarEmpresa = document.querySelectorAll("#empresasProf #infoEmpresas > form > div button");
const btnCerrarDialogEmpresa = document.querySelector("#infoEmpresas #editarVerEmrpesa button[data-type='cerrar']");


/*EVENTOS*/
/*EVENTOS INDEX*/
//Validar alumno al pulsar enter sobre el input password
if (botonValidarAlu) {
    botonValidarAlu.addEventListener("click", validarAlumno);

    inputEnterAlu.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            validarAlumno();
        }
    });
}

//Validar profesor al pulsar enter sobre el input password
if (botonValidarProf) {
    botonValidarProf.addEventListener("click", validarProfesor);

    inputEnterProf.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            validarProfesor();
        }
    });
}


/*EVENTOS ALUMNO*/
//Pestañas portal alumno
if (enlacesNavAlu) {
    enlacesNavAlu.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            let idMostrar = event.currentTarget.getAttribute("data-target");
            let divMostrar = document.getElementById(idMostrar);
            pestañas(divMostrar);
        });
    });
}

//Cerrar sesión alumno
if (navCerrarSesionAlu) {
    navCerrarSesionAlu.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}

//Añadir entrada diario alumno
if (botonInsertarAlu) {
    botonInsertarAlu.addEventListener("click", añadirEntradaAluFinal);
}

//Cerrar elemento actualizar alumno
if (botonCerrarActualizar) {
    botonCerrarActualizar.addEventListener("click", cerrarFormReg);
}

//Eliminar entrada diario alumno
if (botonBorrarAlumno) {
    botonBorrarAlumno.addEventListener("click", borrarRegistroAlu);
}

//Editar entarda diario alumno
if (botonEditarAlumno) {
    botonEditarAlumno.addEventListener("click", abrirEditarRegAlu);
}

//Abrir elemento añadir entrada diario alumno
if (botonAbrirAñadirAlu) {
    botonAbrirAñadirAlu.addEventListener("click", abrirAñadirEntradaAlu);
}

//Cerrar elemento añadir entrada diario alumno
if (botonCerrarForm) {
    botonCerrarForm.addEventListener("click", cerrarFormAñadirAlu);
}



/*EVENTOS PROFESOR*/
//Sistema pestañas portal profesor
if (enlacesNavProf) {
    enlacesNavProf.forEach((enlace) => {
        enlace.addEventListener("click", (event) => {
            let idMostrar = event.currentTarget.getAttribute("data-target");
            let divMostrar = document.getElementById(idMostrar);
            pestañas(divMostrar);
        });
    });
}

//Eliminar alumno portal profesor
if (botonBorrar) {
    botonBorrar.addEventListener("click", borrarRegistroProf);
}

//Abrir elemento editar alumno
if (abrirEditarAlumno) {
    abrirEditarAlumno.addEventListener("click", () => {
        abrirAñadirAlu('editar');
    });
}

//Abrir elemento añadir alumno
if (abrirAñadirAlumno) {
    abrirAñadirAlumno.addEventListener("click", () => {
        abrirAñadirAlu('añadir');
    });
}

//Abrir elemento ver alumno
if (abrirVerAlumno) {
    abrirVerAlumno.forEach((imagen) => {
        imagen.addEventListener("click", () => {
            abrirAñadirAlu('ver');
        });
    });
}

//Cerrar sesión portal profesor
if (navCerrarSesion) {
    navCerrarSesion.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}


//Abrir dialog añadir empresa
if (btnAñadirEmpresa) {
    btnAñadirEmpresa.addEventListener("click", () => {
        const dialogAñadir = document.querySelector("#empresasProf #infoEmpresas dialog#nuevaEmpresa");
        const divOpacar = document.getElementById("opacar");
        const body = document.body;

        dialogAñadir.showModal();
        divOpacar.classList.add("block");
        setTimeout(() => {
            divOpacar.classList.add("active");
        }, 0);

        body.classList.add("opacado");
    });
}

//Cerrar dialog añadir empresa
if (btnCerrarAñadir) {
    const dialogAñadir = document.querySelector("#empresasProf #infoEmpresas dialog#nuevaEmpresa");
    btnCerrarAñadir.addEventListener("click", () => {
        cerrarDialogProf(dialogAñadir);
    });
}

//Asignar empresas a alumnos portal profesor 
if (btnAsignarEmpresa) {
    btnAsignarEmpresa.addEventListener("click", () => {
        asignarEmpresaProf();
    });
}

//Botones editar/ver empresas portal profesor
if (btnVerEditarEmpresa) {
    btnVerEditarEmpresa.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (event.currentTarget.getAttribute("data-type") === "editar") {
                verEditarEmpresa("editar");
            } else {
                verEditarEmpresa();
            }
        });
    });
}

//Botón cerrar dialog ver/editar empresas
if (btnCerrarDialogEmpresa) {
    btnCerrarDialogEmpresa.addEventListener("click", (event) => {
        const dialogCerrar = event.currentTarget.closest("dialog");
        const divOpacar = document.getElementById("opacar");
        const body = document.body;
        divOpacar.classList = "";
        body.classList.remove("opacado");
        dialogCerrar.close();
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
//Abrir formulario nueva entrada diario
function abrirAñadirEntradaAlu() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");
    const body = document.body;

    if (!divOpacar.classList.contains("active")) {
        divOpacar.classList.add("block");
        setTimeout(() => {
            divOpacar.classList.add("active");
        }, 0);
    }

    body.classList.add("opacado");
    divFormAñadir.showModal();
    divFormAñadir.classList.add("active");
}

//Añadir nueva entrada al diario
function añadirEntradaAluFinal() {
    const body = document.body;
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");
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


    divFormAñadir.close();
    divFormAñadir.classList.remove("active");
    divOpacar.classList = '';
    body.classList.remove("opacado");
}

//Cerrar formulario de nueva entrada
function cerrarFormAñadirAlu() {
    const divFormAñadir = document.getElementById("divAñadir");
    const divOpacar = document.getElementById("opacar");
    const body = document.body;

    divFormAñadir.close();
    divFormAñadir.classList.remove("active");
    body.classList.remove("opacado");
    divOpacar.classList = "";
}

//Eliminar entrada diario
function borrarRegistroAlu() {
    const checkBoxs = document.querySelectorAll("input[type='checkbox']");
    let filaBorrar;

    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            filaBorrar = document.getElementById(checkBoxs[i].id + "tr");
        }
    }

    if (filaBorrar) {
        filaBorrar.remove();
    } else {
        alert("Seleccione el check de la entrada que desea eliminar");
    }
}

//Abrir formulario para editar entrada diario
function abrirEditarRegAlu() {
    const body = document.body;
    const dialogEditar = document.querySelector("#mainContenidoAlu #divActualizar");
    const checkBoxs = document.querySelectorAll("input[type='checkbox']");
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
    if (filaActualizar) {
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
        body.classList.add("opacado");
        dialogEditar.showModal();

        divActualizar.classList.add("active");
    } else {
        alert("Seleccione el check de la entrada que desea modificar");
    }
}

//Editar entrada del diario
function editarRegAluFinal() {
    const body = document.body;
    const divFormAñadir = document.getElementById("divActualizar");
    const divOpacar = document.getElementById("opacar");
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
    divFormAñadir.close();
    divFormAñadir.classList.remove("active");
    divOpacar.classList = '';
    body.classList.remove("opacado");
}

//Cerrar formulario editar entrada diario
function cerrarFormReg() {
    const dialogActualizar = document.getElementById("divActualizar");
    const divOpacar = document.getElementById("opacar");
    const body = document.body;

    dialogActualizar.close();
    dialogActualizar.classList.remove("active");
    body.classList.remove("opacado");
    divOpacar.classList = "";
}


/*Funciones Profesor*/
//Abrir formulario para añadir, ver o editar alumnos
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

        if (idCheckbox) {
            console.log("lol");
            let idFilaAlu = "tr" + idCheckbox;
            nombAluTabla = document.querySelector(`tr#${idFilaAlu} td.nombre`).innerText;
            nombAluDiv.value = nombAluTabla;
            boton.classList = "";
            boton.innerText = "Editar alumno";
            boton.addEventListener("click", añadirEditarAlumnoProf);
            divFormAñadir.classList.toggle("block");
        } else {
            alert("Seleccione el check del alumno que desea modificar");
        }


    } else if (accion === "añadir") {

        boton.classList = "";
        boton.innerText = "Añadir alumno";
        boton.addEventListener("click", añadirEditarAlumnoProf);
        divFormAñadir.classList.toggle("block");

    } else if (accion === "ver") {
        document.getElementById("añadirEditarAlu").classList.add("none");
        divFormAñadir.classList.toggle("block");
    }


    setTimeout(() => {
        divFormAñadir.classList.add("active");
    }, 0);
}

//Función para añadir alumnos a la tabla o editar los ya existentes
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
        inputCheck.id = "A6";
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
    let filaBorrar;

    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            filaBorrar = document.getElementById("tr" + checkBoxs[i].id);

        }
    }
    if (filaBorrar) {
        filaBorrar.remove();
    } else {
        alert("Seleccione el check del alumno que desea eliminar");
    }


}

//Sistema de pestañas tanto del portal profesor como del alumno
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

//Función para cerrar el dialog de la pestaña de empresas del portal del profesor
function cerrarDialogProf(dialog) {
    const body = document.body;
    const divOpacar = document.getElementById("opacar");

    dialog.close();
    body.classList.remove("opacado");
    divOpacar.classList = "";
}

//Función para asignar una nueva empresa a los alumnos de la tabla
function asignarEmpresaProf() {
    const alumno = document.querySelector("#empresasProf select#selectAlu");
    const celdasTabla = document.querySelectorAll("#empresasProf #empresasAsignadas table tbody tr td");
    const selectEmpresas = document.querySelector("#empresasProf select#selectEmpr");
    let empresaSeleccionada = document.querySelector(`#empresasProf select#selectEmpr option[value=${selectEmpresas.value}]`);

    celdasTabla.forEach((celda) => {
        if (celda.id === alumno.value) {
            celda.nextElementSibling.innerHTML = empresaSeleccionada.innerHTML;
        }
    });

}

//Función para ver o editar empresas, según el botón que el usuario seleccione
function verEditarEmpresa(tipo = "ver") {
    const dialogVerEditar = document.querySelector("#heroVistaProfesor #empresasProf #infoEmpresas dialog#editarVerEmrpesa");
    const divOpacar = document.getElementById("opacar");
    const body = document.body;
    let btnEditar = dialogVerEditar.querySelector("form > button");

    body.classList.add("opacado");
    divOpacar.classList.add("block");

    setTimeout(() => {
        divOpacar.classList.add("active");
    }, 0);


    if (tipo == "editar") {

        if (!btnEditar) {
            let btnElement = document.createElement("button");
            btnElement.innerHTML = "Editar empresa";
            const formDialog = dialogVerEditar.querySelector("form");
            formDialog.appendChild(btnElement);
        }

        dialogVerEditar.showModal();
    } else {
        if (btnEditar) {
            btnEditar.remove();
        }
        dialogVerEditar.showModal();
    }
}