// Defino función para calculo de total entradas

const valorEntrada = 200;

function TotalCalc() {
    var cantidad = window.document.getElementById('cantidad').value;
    var categoria = window.document.getElementById('categoria').value;
    switch (categoria) {
        case "estudiante":
            var descuento = 0.8;
            break;
        case "trainee":
            var descuento = 0.5;
            break;
        case "junior":
            var descuento = 0.15;
            break;
        default:
            var descuento = 0;
    }
    var totalSinDescuento = cantidad * valorEntrada;
    var descuentoTotal = totalSinDescuento * descuento;
    window.document.getElementById('total').innerHTML = totalSinDescuento - descuentoTotal;
};