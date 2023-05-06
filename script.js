// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "that's too hard";
//     }
//     return a * b;

// }

// alert(multiply(5, 40));


var database = [
    {
        username: "andrei",
        password: "supersecret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    },
];

var obj1 = {
    username: "Barb",
    timeline: "So tired from all that learning!",
};
var obj2 = {
    username: "Chris",
    timeline: "Javascript is sooooo cool!",
};
var obj3 = {
    username: "Jackie",
    timeline: "Javascript is preeetyy cool!",
};

var newsfeed = [ obj1, obj2, obj3 ];

function signIn( user, pass ) {
    for( let i = 0; i < database.length; i++ ) {
        if( database[ i ].username === user && database[ i ].password === pass ) {
            console.log( newsfeed )
        } else {
            alert( "Sorry, wrong username or password" );
        }
    }
}

var userNamePrompt = prompt( "What's your username?" );
var passwordPrompt = prompt( "What's your password?" );

signIn( userNamePrompt, passwordPrompt );