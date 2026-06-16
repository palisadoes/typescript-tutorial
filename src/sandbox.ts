// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
type Variables = { name: string; age: number };
let logDetails: (variables: Variables) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

// example 4
type Example4 = { name: string; age: number };
let logDetails4: (variables: Example4) => void;

logDetails4 = (ninja: Example4) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
