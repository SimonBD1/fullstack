//asynchronous
// Browser event handlers, network calls, buffer / streams, arbejder med filer / directories
// setTimeout/ setInterval, databases

//Javascript one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell, pyramid of doom

// Solution 2. Promises. Egentlig det samme som callbacks, med pænere syntax
//states:
// 1. pending
// 2. fulfilled
// -resolved
// -reject


// Solution 3. Async, Await
new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve("everything ok");
    } catch (error) {
      reject("nothing ok");
    }
  }, 2000);
})
  .then((sucessMessage) => console.log(sucessMessage))
  .catch((errorMessage) => console.log(errorMessage));

console.log("im walking here");

//Create a promisified function
//that is, a function that returns a new promise
//it should be called myPromise
//and it should either resolve as "Something Good" or reject as "Something Bad"
//create a 3 second timeout to simulate asynchronous behavior

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Something Good") : reject("Something Bad");
    }, 3000);
  });
}

myPromise()
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

function myFetch(URL, options = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
            json: new Promise((resolve, reject)=> resolve("response from server"))
        });
      } catch {
        reject();
      }
    }, 2500);
  });
}
myFetch("https://example.com/api/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*try to simulate the fetch function call it myFetch it should return athe promis json() so that you can  call Response.json() on it 
as much as possible try to imagine how fetch orks and simulate the underlying connected. */


//IIFE
(async function main (){
    const myPromiseResult = await myPromise();
    console.log(myPromiseResult);
})()

//main()