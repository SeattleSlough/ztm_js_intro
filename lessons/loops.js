// var toDos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];


// FOR LOOPS
// suppose we want to add exclamation points to each item...

// for ( var i = 0; i < toDos.length; i++ ) {
//     toDos[ i ] = toDos[ i ] + "!";
// }

// //consider the following
// var toDos2 = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// for ( let i = 0; i < toDos2.length; i++ ) {
//     toDos2.pop();
// }

// console.log( toDos2 );
// this will stop at toDos2[1] because the length is continually shortened via pop()

//fix this by creating a variable that captures the length of toDos2 before looping
// var toDos2Length = toDos2.length;
// for ( let i = 0; i < toDos2Length; i++ ) {
//     toDos2.pop();
// }
// console.log( toDos2 );


//WHILE LOOPS
// var counter1 = 0;
// while ( counter1 < 10 ) {
//     console.log( counter1 );
//     counter1++;
// }

// var counter2 = 10;
// while ( counter2 > 0 ) {
//     console.log( counter2 );
//     counter2--;
// }


// DO WHILE LOOPS
// var counter3 = 10;
// do {
//     console.log( counter3 );
//     counter3--;
// } while ( counter3 > 0 )
// DO WHILE is different than WHILE because it performs the action BEFORE the logic check
// WHILE checks the logic and then performs the action


// FOR EACH LOOPS
// show difference between FOR and FOR EACH
var toDos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//FOR loop against toDos array
var toDosLength = toDos.length;
for( let i = 0; i < toDosLength; i++ ) {
    console.log( i );
}

// FOR EACH loop against toDos array
toDos.forEach( function( i ) {
    console.log( i );
} );

//refactored
toDos.forEach( ( element, index ) => console.log( element, ` toDos[${ index }]` ) );
//Template Literal = backtick string ${argument} sting backtick