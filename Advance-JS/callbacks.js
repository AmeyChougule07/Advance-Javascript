//Normal callback
//Callback => passing a function as a parameter in another function

function sum(a,b){
  console.log(a+b);
}
function calculator(a,b,sumCallback) {
  sumCallback(a,b);
}

calculator(2,87,sum);

//Callback Hell[PROBLEM]

function getData(dataId,getNextData) {
  setTimeout(() => {
    console.log("data",dataId);
    if(getNextData){
      getNextData();
  }
  }, 2000);
}

//This whole part is callback hell
getData(1,() =>{
  getData(2,() =>{
    getData(3,() =>{
      getData(4);             
    });
  });
});