

//Call back Hell 


function placeOrder(back){
    console.log("Talking with Dominoz");
    
    setTimeout(() => {
        console.log("Order placed Successfully");
        back()
    }, 2000);
}
// placeOrder()


function preparingOrder(kal){
console.log("Preparing the Pizza");

setTimeout(() => {
    console.log("Preparation is Done");
    kal()
}, 5000);
}

//preparingOrder()

function pickUp(lelo){
    console.log("Reaching restaurant for picking the order");
    
setTimeout(() => {
    console.log("Picked up the order");
    lelo()
}, 5000);

}
//pickUp()

function deliverOrder(){
    console.log("Delivery Boy is on the way");
    
    setTimeout(() => {
        console.log("Order Delivered successfully");
        
    }, 5000);
}

//deliverOrder()

placeOrder(()=>{
    preparingOrder(()=>{
        pickUp(()=>{
            deliverOrder()
        })
    })
})




// console.log(10);

// let timer = Date.now()

// while(Date.now() - timer < 2000  ){

// }

// console.log(20);
// console.log(30);
// 10
// 20
// 30

// console.log("hello coder army");

// function meet( ) {
//     const arr = [2,4,6]
//     console.log(arr[0]);
    
// }

// function greet( ) {
//     const a = 2 + 3;
//     console.log(a);
//     meet()
//     console.log(a*a);
    
// }



// greet()
// console.log("Program End");


// HCA
// 5
// 2
// 25
// PE


//  console.log("hello coder army");


//  setTimeout(() => {
    
// let a = 2+4;
// console.log(a);

//  }, 2000);

// let b = 20
// let arr = [20,30,11]


// for(let i of arr){
//     console.log(i*b);
    
// }













































