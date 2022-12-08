'use strict';

function BinarioADecimal(num) {
   // tu codigo aca
   let numeroDecimal = 0; // Es la variable que guardará el valor decimal
   const contadorBinario = num.length; // Variable para saber cuantos digitos tiene el numero binario
   for(let i=0 ; i<contadorBinario; i++) {  // Verifico si hay mas digitos y luego sumo el indice al final del ciclo para que se desplace hacia la izq
     let posicion = contadorBinario - 1 - i; // Calculo que permite avanzar desde el final hasta el principio(der a izq), le resto 1 para que no se pase, y le resto i para que la posicion vaya reduciendo y llegue al inicio
     let baseBinaria = 2**i; // elevo 2 al indice, 
     numeroDecimal += num[posicion] * baseBinaria; // Sumo a la variable que guarda el num.decimal el numero en la posicion por el resultado de 2 elevado al indice
   }
   return numeroDecimal;
}

function DecimalABinario(num) {
   // tu codigo aca
   let resultadoDecimal = num;  // Guardo el numero en una variable
   let binario = 0; // Inicializo la variable en 0
   for (let i=0; resultadoDecimal >= 1; i++){  // En el ciclo pongo como cond. que mientras sea distinto a cero ejecute el ciclo y sumo el indice al final
     binario = binario + ((resultadoDecimal%2)*Math.pow(10,i)); // El numero recibido por el usuario lo divido por 2 y lo multiplico por el resultado de la base 10 por la posicion donde se encuentra el indice y lo sumo todo con el binario
     resultadoDecimal = Math.trunc(resultadoDecimal/2); // Transformo el posible numero con coma ingresado por el usuario a un numero entero
   }
   binario = binario.toString(); // Pasa el numero a un string
   return binario;
   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
