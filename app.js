function callMenu(){
    let ejercicio= parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 3. ejercicio3")
    );
    if(isNaN(ejercicio)){
        alert ("hey!! por fvor ingresa valores ")
    }else{
        MenuEjercicios(ejercicio)
    }
}
function MenuEjercicios(ejercicio){
    switch(ejercicio){
    case 1:
        const nombre = prompt("nombre del producto");
        const precio = parseFloat(prompt("ingrese precio del producto"));
        const cantidad = parseFloat(prompt("ingrese cantidad"));
        alert(ejecico3(nombre,precio,cantidad));
        break;
    }
}

function ejecico3(nombre, precio,cantidad){
    if(isNaN(precio) || isNaN(cantidad)){
        return"porfavor ingresa datos ";
    } else {
        let total=0;
        total = (precio * cantidad) ;
        return "El Producto es: " + nombre + " El Precio: " + precio + " Cantidad: " + cantidad + " Total del Pedido es: " + total;
    }
}

