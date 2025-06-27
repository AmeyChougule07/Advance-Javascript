//This is an alternative to the callback Hell problem

function getData(dataId) {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log("data",dataId);
      resolve("Success");
    }, 2000);
  });
}

//Promise chain

getData(1)
.then((res) =>{
  return getData(2);
})
.then((res) =>{
  return getData(3);
})
.then((res) =>{
  console.log(res);
});