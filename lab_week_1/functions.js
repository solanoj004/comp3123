// Declaring functions
function welcome() {
    console.log('Welcome to the class');
}

function greet(name){
    console.log(`Hello, ${name}`);

}

console.log(typeof welcome)

// Function Expression
var welcome = function() {
    console.log('Welcome to the class');
}

console.log(typeof welcome)

// Arrow Function
var welcome = () => {
    console.log('Welcome to the class')
}

var greet = name => {
    console.log(`Hello, ${name}`);
}

var greet = name => console.log(`Hello, ${name}`);

var add = (a, b) => a + b

var add = (a,) => {
    return a + b
}

// ... gets all the values after
function print(a, b, ...c) {
    console.log(arguments);
    console.log(a)
    console.log(b)
    console.log(c)
}

// Arrow functions 

print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
