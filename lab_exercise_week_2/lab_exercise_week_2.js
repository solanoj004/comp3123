// Jacob Solano
// 101348583

// Exercise 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (let item of myArray) {
        console.log(`${greetText} ${item}`);
    }
};

// Exercise 2: Capitalizing using first letter using destructuring and spread operator
const capitalize = ([first, ...rest]) => {
    // Capitalize first letter and lowercase the rest
    return first.toUpperCase() + rest.join('').toLowerCase();
};

// Testing capitalize function
console.log(capitalize('foobar')); // Output: Foobar
console.log(capitalize('nodeJs')); // Output: Nodejs    a

// Exercise 3: Using array.map with the capitalize function
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors)
// capitalizedColors will be ['Red', 'Green', 'Blue']

// Exercise 4: Filter numbers less than 20 using array.filter
const filterLessThan20 = (numbers) => {
    return numbers.filter(num => num < 20);
};
const numbers_exec4 = [12, 23, 34, 45, 56, 67, 78, 89, 90, 1, 3, 5];
const filteredNumbers = filterLessThan20(numbers_exec4);
console.log(filteredNumbers); // Output: [12, 1, 3, 5]

// Exercise 5: Calculate sum and product using array.reduce
const calculateSum = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

const calculateProduct = (numbers) => {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

const numbers_exec5 = [1, 2, 3, 4];
const sum = calculateSum(numbers_exec5);
const product = calculateProduct(numbers_exec5);

console.log(`Sum: ${sum}`); // Output: Sum: 10
console.log(`Product: ${product}`); // Output: Product: 24

// Exercise 6
// Base Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// Sedan subclass extending Car
class Sedan extends Car {
    constructor(model, year, balance) {
        // Call the parent constructor using super
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

// Testing the Car and Sedan classes
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); // Output: Model: Pontiac Firebird Engine 1976

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); // Output: Volvo SD has a balance of $30000.00
