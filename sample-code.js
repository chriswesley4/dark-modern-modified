// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Arrow function example
const multiply = (x, y) => x * y;

// Asynchronous function example
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Class example
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(`${this.name} the ${this.type} says hello!`);
    }
}

// Create instances of the class
const dog = new Animal('Buddy', 'dog');
dog.speak();

// Using the functions
console.log('Addition:', add(5, 3));
console.log('Multiplication:', multiply(4, 7));

// Fetching data
fetchData('https://jsonplaceholder.typicode.com/todos/1');
