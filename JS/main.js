
const TELA_POR_PERSONA = 3;
const PRECIO_POR_METRO = 3550;



function calcularPrecioTela(){
    var numeroDePersonas = document.getElementById("numeroDePersonas").value;
    var cantidadTela = numeroDePersonas * TELA_POR_PERSONA;
    var precioTela = cantidadTela * PRECIO_POR_METRO;
    document.getElementById("cantidadTela").innerHTML = `El monto de tela a comprar seria de : ${cantidadTela}mts`;
    document.getElementById("precioTela").innerHTML = `El precio de la tela en es: ₡${precioTela}`;
}

