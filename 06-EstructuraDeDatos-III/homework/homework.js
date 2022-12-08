'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null
}

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      //es menor
      if(this.left){
         //tengo algo a la izquierda
         this.left.insert(value);
      } else {
         // no tengo nada a la izquierda
         this.left = new BinarySearchTree(value);
         return value;
      }
   } else {
      //es mayor
      if(this.right){
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
         return value;
      }
   }
}

BinarySearchTree.prototype.size = function()
{
   let count =0 ;
   count++;
   if(this.left) count += this.left.size();
   if(this.right) count += this.right.size();
   return count;
}

const miArbolito = new BinarySearchTree(8);
console.log(miArbolito);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
