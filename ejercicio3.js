const objeto={
    producto: 'vestido',
    precio: 400,
    descuento: 10,
}

function neto(x, y, z){

    precioConDescuento=(x-(x*(y/100)));

    return console.log("Objeto "+ z +", precio "+ x +" y descuento "+ y +". El metodo devolverá " +precioConDescuento);
}

neto(objeto.precio, objeto.descuento, objeto.producto);




