// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "that's too hard";
//     }
//     return a * b;

// }

// alert(multiply(5, 40));


var obj = {
    username: "Michael",
    password: "12345",
};

var database = [ obj ];

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

var userNamePrompt = prompt( "What's your username?" )
var passwordPrompt = prompt( "What's your password?" )

function signIn( user, pass ) {
    if( user === database[ 0 ].username && pass === database[ 0 ].password ) {
        console.log( newsfeed );
    } else {
        alert( "Sorry, wrong username or password" )
    }
}

signIn( userNamePrompt, passwordPrompt );