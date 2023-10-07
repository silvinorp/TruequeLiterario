// Función ejemplo para validar formulario

function validarFormulario() {
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim()
    var apellido = document.getElementById("apellido").value.trim()
    var dni = document.getElementById("DNI").value.trim() 
    var direccion = document.getElementById("direccion").value.trim() 
    

    // Creo que esto no es necesario si se coloca el atributo required> en el input
            // Verificar si algún campo está en blanco
        /*     if(nombre==="" || dni==="" || direccion===""){
              alert("Debe completar todos los campos del formulario.")
              return false
            } */

    // Verificar si el nombre, apellido y dirección contienen solo caracteres permitidos. 
 
    var nombreTest =/^[a-zA-Z\s]+$/.test(nombre)
    var apellidoTest =/^[a-zA-Z\s]+$/.test(apellido)
    var direccionTest =/^[a-zA-Z0-9\s\-,'./\\]+$/.test(direccion)

    // nombreTest===false
    if(!direccionTest){
      alert("Debe completar la dirección solo con las letras del abecedario y los caracteres , . - / \ ")
      return false
    }
    if(!nombreTest || !apellidoTest ){
      alert("Debe completar nombre y apellido solo con las letras del abecedario.")
      return false
    }  

    // Verificar dni no es un número
    // dni ="12345678"
    if(isNaN(dni)){
      alert("Debe completar dni sólo con números.")
      return false
    }    

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if(dni.length!==8){
      alert("Debe completar el DNI con 8 dígitos.")
      return false
    }
    
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Se enviaron los datos correctamnte.")
    return true
  }
