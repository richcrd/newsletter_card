function validarEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // comprobar si el input esta vacio 
    if( email === ""){
        alert("El campo de entrada esta vacio, ingrese su correo");
        return false; // Detiene el envio del formulario
    }

    if(regex.test(email)){
        alert("Correo electronico valido");
    } else {
        alert("Correo electronico invalido");
    }
}