export class ClassExample {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log("say hello");
    console.log(this);
  }

  goodbyeAsFatArrow = () => {
    // This always points to the "instance of the class"
    console.log(this.name + " says goodbye");
  };

  goodbye() {
    // This can point to anything
    console.log(this.name + " says goodbye");
  }
}

const maksim = new ClassExample("Maksim");

maksim.hello();

const thomas = new ClassExample("Thomas");
thomas.hello = thomas.hello.bind(maksim);
thomas.hello();
thomas.goodbye.call(maksim);
thomas.goodbye();
console.log(thomas);
// const prototype = Object.getPrototypeOf(thomas);
// prototype.goodbye = prototype.goodbye.bind(maksim);

const günter = new ClassExample("Günter");
günter.goodbye();

const jan = new ClassExample("Jan");
jan.goodbye();
