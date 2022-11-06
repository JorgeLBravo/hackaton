
//---------------Ejercicios JS ----------------------
//Ejercicio 1
function callMenu(){
    let nro_ejercicio= parseInt(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.Calcular si el año es biciesto. \r\n 2.Calcular numeros. \r\n 3. Precio total del pedido.")
    );
    if(isNaN(nro_ejercicio)){
        alert ("hey!! por fvor ingresa valores ")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let año = parseInt(prompt("Ingresar año a evaluar: "));
            alert(ej1_añoBiciesto(año));
            break;
        case 2:
            let oper = parseInt(prompt("Ingrese Operacion: \r\n 1. Suma \r\n 2. Resta \r\n 3. Multiplicacion \r\n 4. Division \r\n 5. Exponenciacion \r\n 6. Residuo"));
            console.log(oper);
            alert(ej2_calcularOperacion(oper));
            break;
        case 3:
            const nombre = prompt("nombre del producto");
            const precio = parseFloat(prompt("ingrese precio del producto"));
            const cantidad = parseFloat(prompt("ingrese cantidad"));
            alert(ejecico3(nombre,precio,cantidad));
            break;
        default:
            break;
    }
}
function ej1_añoBiciesto(año){
    if(isNaN(año)){
        return"porfavor ingresa datos ";
    } else {
        if (año % 400 == 0 || (año % 4 == 0) && !(año % 100 == 0)){
            return alert("Es Biciesto");
        } else {
            return alert("No es Biciesto");
        }
    }
}
function ej2_calcularOperacion(oper){
    if(isNaN(oper)){
        return "porfavor ingresa datos";
    } else {
        let resultado = 0;
        let mensaje = "";
        let num1 = 0;
        let num2 = 0;

        switch(oper){
            case 1:
                num1 = parseFloat(prompt("Ingresar numero 1: "));
                num2 = parseFloat(prompt("Ingresar numero 2: "));
                resultado = num1 + num2;
                mensaje = "El resultado de la suma es: " + resultado;
                break;
            case 2:
                num1 = parseFloat(prompt("Ingresar numero 1: "));
                num2 = parseFloat(prompt("Ingresar numero 2: "));
                resultado = num1 - num2;
                mensaje = "El resultado de la resta es: " + resultado;
                break;
            case 3:
                num1 = parseFloat(prompt("Ingresar numero 1: "));
                num2 = parseFloat(prompt("Ingresar numero 2: "));
                resultado = num1 * num2;
                mensaje = "El resultado de la multiplicacion es: " + resultado;
                break;
            case 4:
                num1 = parseFloat(prompt("Ingresar numero 1: "));
                num2 = parseFloat(prompt("Ingresar numero 2: "));
                resultado = num1 / num2;
                mensaje = "El resultado de la division es: " + resultado;
                break;
            case 5:
                num1 = parseInt(prompt("Ingresar numero: "));
                num2 = parseInt(prompt("Ingresar numero a elevar: "));
                resultado = (Math.pow(num1, num2));
                mensaje = "El resultado de la exponenciacion es: " + resultado;
                break;
            case 6:
                num1 = parseFloat(prompt("Ingresar numero 1: "));
                num2 = parseFloat(prompt("Ingresar numero 2: "));
                resultado = num1 % num2;
                mensaje = "El resultado del residuo es: " + resultado;
                break;
            default:
                mensaje = "-1";
                break;
        }
        return alert(mensaje);
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