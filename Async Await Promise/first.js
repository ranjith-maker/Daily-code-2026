
function test1(){

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      const sum = "First Promise Resolved";
      resolve(sum)
        
    }, 4000);
})
 return p1
}


function test2(){
const p2 = new Promise((resolve, reject)=>{

    setTimeout(() => {
           const sum = "Second Promise Resolved";
      resolve(sum)   

    }, 3000);
})
 return p2
}


async function greet() {
    
console.log("I welcome you all JS thinkers");
    
let [data1, data2] = await Promise.all([test1(), test2()])
console.log(data1);
console.log(data2);

}


greet()

// I welcome you all JS thinkers
// First Promise Resolved
// Second Promise Resolved

// Now both are independent function we got both in the same time 



































