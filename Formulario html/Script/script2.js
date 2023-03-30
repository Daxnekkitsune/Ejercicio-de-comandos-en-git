let propietariodelvehiculo, modelodelvehiculo, placa, tipo, fechaentrada, horainicio, canthoras; 

let form = document.querySelector('#form')

form.addEventListener('submit', (e)=>{
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})
function LeerDatos(){
    propietariodelvehiculo = document.getElementById('p del vehiculo').value
    modelodelvehiculo = document.getElementById('mod del vehiculo').value
    placa = document.querySelector('placa').value
    tipo = document.querySelector('tipo').value
    fechaentrada = document.querySelector('fecha entarda').value
    horainicio = document.querySelector('hora inicio').value
    canthoras = document.querySelector('cant horas').value

    ValidarData(propietariodelvehiculo, modelodelvehiculo, placa, tipo, fechaentrada, horainicio, canthoras) 
    guardarLocarStorage(propietariodelvehiculo, modelodelvehiculo, placa, tipo, fechaentrada, horainicio, canthoras) 
}

function ValidarData (propietariodelvehiculo, modelodelvehiculo, placa, tipo, fechaentrada, horainicio, canthoras){
    if(propietariodelvehiculo.length==0 || modelodelvehiculo.length==0 || placa.length==0 || tipo.length==0 || fechaentrada.length==0 || horainicio.length==0 || canthoras.length==0 ){
        swal("Error de informacion", "oops,parece que falta algo", "error");
    }
    }

    function guardarLocarStorage(propietariodelvehiculo,modelodelvehiculo,placa,tipo,fechaentrada,horainicio,canthoras) {
        localStorage.setItem('Propietario del vehiculo',propietariodelvehiculo);
        localStorage.setItem('Modelo del vehiculo',modelodelvehiculo);
        localStorage.setItem('Placa',placa); 
        localStorage.setItem('Tipo',tipo);
        localStorage.setItem('Fecha de entrada',fechaentrada);
        localStorage.setItem('Hora de inicio',horainicio);
        localStorage.setItem('Cantidad de horas',canthoras);
        ListaData()
    }

    function ListaData() {
        let propietariodelvehiculoUs = localStorage.getItem('Propietario del vehiculo');
        let modelodelvehiculoUs = localStorage.getItem('Modelo del vehiculo');
        let placaUs = localStorage.getItem('Placa');
        let tipoUs = localStorage.getItem('Tipo');
        let fechaentradaUs = localStorage.getItem('Fecha de entarda');
        let horainicioUs = localStorage.getItem('Hora de inicio');
        let canthorasUs = localStorage.getItem('Cantidad de horas');
    }
