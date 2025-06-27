const person = {
  name: "Amey",
  greet(){
    console.log(`Hi,I am ${this.name}`);
  },
}

person.greet();

//here the context of this is lost
const greetFunction = person.greet;
greetFunction();

//To rectify it we need to bind the new variable with the context
const bindGreet = person.greet.bind({name:"Alice"});
bindGreet();