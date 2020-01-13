// Class is a blueprint for an Object

// 1. Object literal
const GreetingA = {
  username: `World`,          // Properties (variables)
  greet: function() {         // Method (function)
    console.log(`Hello, ${this.username}.`)
  }
}

// 2. Functional
function GreetingB() {
  this.username = `World`,   // Properties (variables)
  this.greet = function() {  // Method (function)
    console.log(`Hello, ${this.username}.`)
  }
}

// 3. Classes
class GreetingC {
  username = `World`         // Properties (variables)
  greet() {                  // Method (function)
    console.log(`Hello, ${this.username}.`)
  }
}


// GLOBAL SCOPE:

let a = Object.create(GreetingA)
let b = new GreetingB()
let c = new GreetingC()

console.log(a.username)
console.log(b.username)
console.log(c.username)

a.greet()
b.greet()
c.greet()