let nombre, correo, mensaje;

let form = document.querySelector('#form')


form.addEventListener('submit', (e)=>{
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})
function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.querySelector('textarea').value
    
    ValidarData(nombre,correo,mensaje) 
    guardarLocarStorage(nombre,correo,mensaje) 
}

function ValidarData (nombre,correo,mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Error de informacion", "oops,parece que falta algo", "error");
    }
    }

    function guardarLocarStorage(nombre,correo,mensaje) {
        localStorage.setItem('Nombre',nombre);
        localStorage.setItem('Correo',correo);
        localStorage.setItem('Mensaje',mensaje); 
        ListaData()
    }

    function ListaData() {
        let nombreUs = localStorage.getItem('Nombre');
        let correoUs = localStorage.getItem('Correo');
        let mensajeUs = localStorage.getItem('Mensaje');
        swal("Hola", nombre);
    }



   