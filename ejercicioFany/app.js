let valor;
let menu;

obtenerValor();
function obtenerValor(){
    console.log('------------')
    console.log('Menú')
    console.log('------------')
    menu = ['1. Izquierda', '2. Derecha', '0. Salir']
    for (i = 0; i < menu.length; i++){
        console.log(menu[i]);
    }
    console.log('------------')
    valor = prompt('Ingrese un valor: ', '');
}
while (valor > 0) {
    switch (valor) {
        case '1':
            console.log('Ingreso el valor de: ' + menu[0]);
            obtenerValor();
            break;

        case '2':
            console.log('Ingreso el valor de: ' + menu[1]);
            obtenerValor();
            break;
    
        default:
            console.log('Usted ingreso un valor incorrecto: ' + valor);
            obtenerValor();
            break;
    }
}
console.log('Usted ingreso el valor de: ' + menu[2]);