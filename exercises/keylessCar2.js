// FUNCTION DECLARATION
function checkDriverAge ()
{
    var age = prompt("What is your age?");
    if (age < 18) {
        alert("Sorry, you are too young to drive this car.  Powering off");
    } else if (age == 18) {
        alert(
            "Congratulations on your first year of driving.  Enjoy the ride!"
        );
    } else if (age > 18) {
        alert("Powering On.  Enjoy the ride!");
    }
}


//FUNCTION EXPRESSION
var checkDriverAge2 = function ()
{
    var age = prompt( "What is your age?" );
    if ( age < 18 ) {
        alert( "Sorry, you are too young to drive this car.  Powering off" );
    } else if ( age === 18 ) {
        alert(
            "Congratulations on your first year of driving.  Enjoy the ride!"
        );
    } else if ( age > 18 ) {
        alert( "Powering On.  Enjoy the ride!" );
    }
};


function checkDriverAge3 (age) {
    if (age < 18) {
        alert("Sorry, you are too young to drive this car.  Powering off");
    } else if (age === 18) {
        alert(
            "Congratulations on your first year of driving.  Enjoy the ride!"
        );
    } else if (age > 18) {
        alert("Powering On.  Enjoy the ride!");
    }// body
}

checkDriverAge();
checkDriverAge2;
checkDriverAge3(18);