//Example one
function outer() {
  let counter = 4;
  return function inner() {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

//Example two

function elder(){
  let elderVar = "I am the eldest";
  function younger(){
    return elderVar;
  }
  return younger;
}

let child = elder();
console.log(child());
console.log(child());
console.log(child());
