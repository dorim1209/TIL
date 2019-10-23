// ES5

function add(a, b) {
  return a + b;
}

//ES6
const multiply = (a, b) => {
  return a * b;
};

const mul = (a, b) => a * b;

const square = a => a * a;

const logging = () => console.log("logging...");

const obj = {
  name: "dorim",
  //ES5 문법
  sayHello: function() {
    console.log("Hello!");
  },
  //ES6 문법
  sayBye() {
    console.log("Bye!");
  }
};

obj.name;
obj.sayHello;
obj.sayBye;
