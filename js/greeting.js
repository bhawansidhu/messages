class Greeting {
  constructor(user) {
    this.username = user
  }

  greet() {
    console.log(`Hello, ${this.username}.`)
  }
}


let a = new Greeting(`Susan`)
a.greet()

let b = new Greeting(`Chau`)
b.greet()

