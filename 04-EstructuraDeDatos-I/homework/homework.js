'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n == 0) {
      return 1
   } else {
      return n*nFactorial(n - 1)
   }
}
console.log(nFactorial(3));

// EJERCICIO 2
function nFibonacci(n) {
   if (n <= 1) {
      return n
   } else {
      return(nFibonacci(n - 1) + nFibonacci(n - 2))
   }
}
console.log(nFibonacci);

// EJERCICIO 3
function Queue() {
   this.array() = [];
}

Queue.prototype.enqueue = function(value){
   this.array.push(value);
}

Queue.prototype.dequeue = function(){
   this.array.shift(value);
}

Queue.prototype.size = function(){
   return this.array.length;
}

var fila = new Queue();
fila.enqueue();

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
