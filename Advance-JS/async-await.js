//Example one
function fetchUserData(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({name:"Amey",URL:"www.google.com"})
    }, 300);
  });
}

async function getUserData() {
  try{
    console.log("Fetching user data");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log(userData);
  }catch(error){
    console.log("Error fetching data",error);
  }
}

getUserData();

//Async-await is more efficient alternative for callback hell problem and also better than promise chain

function getData(dataId) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("data",dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
};

//To avoid this extra function call we can use IIFE(Immediately Invoked Function Expression)
getAllData();

//IIFE = We can't reuse that function because it doesn't have any name,lets see the below given example

(async function(){
  console.log("Getting data 1....");
  await getData(1);
  console.log("Getting data 2....");
  await getData(2);
})();