var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    shout: function () {
        console.log("AHHHHHHHHH");
    }
};

// A function within an object is called a METHOD

user.favoriteFood = "spinach";

console.log(user);

user.isMarried = true;

console.log(user);

var list = ["abrakadabra", "shazaam", "presto"];

user.spells = list;

console.log(user);

var list2 = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123"
    }
];

console.log(list2);

var emptyObj = {};
console.log(emptyObj); // {}
emptyObj.name = "Andy"; // {name: "Andy"}

var nullObj = null;
console.log(nullObj); //null
nullObj.name = "Andy"; // Uncaught TypeError as can add to a null Obj



