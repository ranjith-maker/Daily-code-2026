

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


console.log("10")

setTimeout(() => {
    console.log("20");
    
}, 2000);

console.log("30")

































