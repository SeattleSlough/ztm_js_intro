var list = [ "tiger", "cat", "bear", "bird" ];

var numbers = [ 1, 2, 3, 4 ];

var booleans = [ true, false, false, true ];

// var functionList = [ apple() ];

var arrayOfArrays = [ [ "tiger", "cat", "bear", "bird" ] ];

// to get "bear"
console.log( arrayOfArrays[ 0 ][ 2 ] );

list.shift();
console.log( list );

list.pop();
console.log( list );

list.push("elephant");
console.log( list );

// NOTE: array.concat() requires a variable assignment because it CREATES a new object v others which simply modify it.
list = list.concat( [ "bee", "deer" ] );
console.log( list );

list.sort();
console.log(list);
