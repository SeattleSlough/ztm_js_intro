var array = [ "Banana", "Apples", "Oranges", "Blueberries" ];
console.log(array);

array.shift();
console.log( array );

array.sort();
console.log( array );

array.push("Kiwi");
console.log( array );

array.splice(0,1);
console.log(array);

array.reverse();
console.log( array );

var array2 = [ "Banana", [ "Apples", [ "Oranges" ], "Blueberries" ] ];

console.log(array2[1][1][0]);