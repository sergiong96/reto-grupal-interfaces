
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

    if (!divFormAñadir.classList.contains("active")) {
        divFormAñadir.classList.add("active");
    }
}

function cerrarForm() {
    const divFormAñadir = document.getElementById("divAñadir");
    if (divFormAñadir.classList.contains("active")) {
        divFormAñadir.classList.remove("active");
    }
}
