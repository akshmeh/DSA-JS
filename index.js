/* Data Structure With JavaScript */

// Array Methods
import {arrayMethods} from './arrayMethods.js';


var newArray = new arrayMethods();

newArray.insertionLastPosition(1);
newArray.insertionLastPosition(2);
newArray.insertionLastPosition(3);
newArray.insertionLastPosition(4);

newArray.insertionAtPosition(1,5);
newArray.traversal();
console.log(newArray.size());
// console.log(newArray.access(1));
// console.log(newArray.deletionAtPosition(1));
// console.log(newArray.deleteionLastPosition());
console.log(newArray.searchByIndex(1));
console.log(newArray.searchByElement(5));
newArray.merge([6,7,8]);
newArray.traversal();
console.log(newArray.size());


