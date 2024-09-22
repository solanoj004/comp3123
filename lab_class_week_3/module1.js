// Global object
global.college = "George Brown College";

// console.log(module);

var name = "Jacob Solano";
function greet(name) {
    console.log("Hello " + name);
}

function sayHello() {
    console.log("Hello World");
}

module.exports = {
    name,
    greet,
    sayHello
};
