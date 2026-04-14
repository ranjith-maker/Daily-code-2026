const express = require("express")

const {Auth} = require("./middleware/Auth")

const app = express()

app.use((express.json()))

const foodMenu = [
  { id: 1, food: "chowmein", category: "veg", price: 200 },
  { id: 2, food: "fried rice", category: "veg", price: 180 },
  { id: 3, food: "paneer butter masala", category: "veg", price: 250 },
  { id: 4, food: "veg biryani", category: "veg", price: 220 },
  { id: 5, food: "masala dosa", category: "veg", price: 120 },
  { id: 6, food: "idli sambar", category: "veg", price: 100 },
  { id: 7, food: "veg burger", category: "veg", price: 150 },
  { id: 8, food: "cheese pizza", category: "veg", price: 300 },
  { id: 9, food: "chicken biryani", category: "non-veg", price: 280 },
  { id: 10, food: "chicken curry", category: "non-veg", price: 260 },
  { id: 11, food: "egg fried rice", category: "non-veg", price: 190 },
  { id: 12, food: "fish fry", category: "non-veg", price: 270 },
  { id: 13, food: "mutton curry", category: "non-veg", price: 320 },
  { id: 14, food: "chicken noodles", category: "non-veg", price: 210 },
  { id: 15, food: "prawn masala", category: "non-veg", price: 350 },
  { id: 16, food: "egg omelette", category: "non-veg", price: 90 }
];

//user cart'll go here
const addtoCart = []


//as any user goes to this url they can see all the foodMenu
app.get( "/food" , (req,res)=>{

    res.status(200).send(foodMenu)

})


app.post("/user" , (req,res)=>{

    try{
addtoCart.push(req.body)
res.status(201).send("item addded to the cart")
console.log(req.body);
} catch (error) {
 res.send("Some error occured" + error )   
}


})




app.get( "/user",   (req,res)=>{

try{
    if(addtoCart.length === 0){
       res.send("Cart is empty")
    }else{
    res.status(200).send(addtoCart)
    }
    console.log(addtoCart);
    } catch (error) {
 res.send("Some error occured" + error )   
}

})



app.delete( "/user/:id", (req,res)=>{

try {
    const id = Number(req.params.id)
const items = addtoCart[0]
const index = items.findIndex((item)=> item.id === id )

if(index === -1){
    res.status(404).send("Incorrect")
}else{
items.splice(index,1)
res.status(200).send("Successfully deleted")

}
} catch (error) {
 res.send("Some error occured" + error )   
}



})




app.get( "/dummy" , (req,res)=>{

    try {
        JSON.parse("Invalid json way")
    res.send("Hello Coder Army")
    }catch (error) {
        res.send("Something went wrong");
    }

})


/*
app.get( "/dummy" , (req,res)=>{

    JSON.parse("invalid ones")
    res.send("Hello Coder Army")

})
it threw me 500 internal server error, why because it isn't valid JSON to parse
A valid look like ('{"name" : "Rohith"}')

now when it parses it sends me Hello Coder Army
app.get( "/dummy" , (req,res)=>{

    JSON.parse('{"name" : "Rohith"}')
    res.send("Hello Coder Army")

})

what if I write that incorrect JSON and I need to show an error message I can't show server error , that is what Error handling
Now it handles the error nicely and shows the user,  Something went wrong
app.get( "/dummy" , (req,res)=>{

    try {
        JSON.parse("Invalid json way")
    res.send("Hello Coder Army")
    }catch (error) {
        res.send("Something went wrong");
    }


})

Another imp point to notice here, we already wrote express.json()and json.parse() here , so I can handle with json.parse()right? why means json.parse expects full object
where as express.json() can handle packets of 010101 and convert it as an JSON to object to store it 
*/











// Admin tries to add item in food menu
// I need to verify here and ask what are you admin. For now we're writing a dummy code , we'll see in upcoming lecture as what should we do 
// for now, it is a normal conditioning based access to the admin, not real Authentication
// also what ever we add we can only add in JSON format, and it goes req.body thats why puhsing there

//This Authentication is only for admin that's whyit was written before admin
//now neat and clean

app.use( "/admin" , Auth)

app.post( "/admin" ,(req,res)=>{

        foodMenu.push(req.body)
        res.status(201).send("Food item is added successfully")
        console.log(req.body);

})

app.delete( "/admin/:id" , (req,res)=>{

const id = Number(req.params.id)
const index = foodMenu.findIndex((item) => item.id === id)

if(index === -1){
    res.send(" Item not found")
}else{
foodMenu.splice(index , 1)
res.send("Successfully deleted")
}

})


app.patch( "/admin" , (req,res)=>{

    const update = foodMenu.find((item)=> item.id  ===  req.body.id)
    Object.assign(update, foodMenu)
    res.send("Menu is updated") 

console.log(req.body);
})






 











app.listen(3500, ()=>{
    console.log("running in 3500");
    
} )


/*














*/







