const express = require("express")

const app = express()


app.use(express.json())


const bookStore = [ 

 {id:1,  name : "Harry Potter" , author  : "JK Rowling", },
 { id:2,  name : "Three friends", author : "Chetan Bhagat"},
{ id:3,   name : "Nexus", author : "Rohit Negi" },
{ id:4,  name : "DSA", author : "Striver"  },
{ id:5,  name : "Cohorts", author : "Harkirat"  },

]

//we wanna fetch this all books, thats why we sent bookStore 
app.get( "/book", (req,res)=>{

const book = bookStore.filter((item)=> item.author === req.query.author )

res.send(book)


})



//here we did dynamic url
app.get("/book/:id" , (req, res)=>{

const id = Number(req.params.id);
const book = bookStore.find((item) => item.id === id) 
res.send(book)
console.log(book);


})

//now we wanna update it 
app.post( "/book", (req,res)=>{

bookStore.push(req.body)
res.send({newAddition : req.body }  )
console.log(bookStore);

})

// when I pushed it, when I upated the array with new item why I didnt see the new item in the array here?, 
//it'll be stord in memory RAM . it wont show in UI , Also when I  restart the server and pressed send once again in  GET method Postman 
//it got refreshed and it showed this 5 books only not the pushed ones, because it is stored in RAM, this is hwy we need a secondary memory when it can be stored


//Deleted books using  params
app.delete( "/book/:id", (req,res)=>{

const id = Number(req.params.id)
const index = bookStore.findIndex((item) =>item.id === id)

bookStore.splice(index, 1);
res.send("deleted the book")
})



//I am gonna update an item here, to updat ewe use PUT , PATCH, with PUT we can do whole change with Patch we cna do specific change 
//but it is on us how much we are gonna change, because both mehtod lets us do more than one or one or whole changes



//Updated auhtor, in postman, go to body, JSON, raw, {"id": 2 "author" : "Neha"} so now updated
app.patch( "/book", (req,res)=>{

const book = bookStore.find((item)=> item.id === req.body.id )

// if(req.body.author)
// authorChange.author = req.body.author

Object.assign(book, req.body)

console.log(req.body);
res.send("updated")

})


//Now use Put, with PUT we do changes in whole body, thats why it is also params, when you wanna delete the whole item you  use the findindex    

app.put( "/book/:id",  (req,res)=>{

const id = Number(req.params.id)    
const index = bookStore.findIndex((item)=> item.id === id )

bookStore[index] = {id,  ...req.body}

res.send("changes added")

})


app.listen(4000, () =>{
    console.log("running in 4000");
    
})


/*as we can send array to JSON , I wrote res.send(bs)
app.get( "/book", (req,res)=>{
res.send(bookStore)
})

Now I wanna read only striver book, how'll I fetch it ? 
//here we did dynamic url
app.get("/book/:id" , (req, res)=>{

const id = Number(req.params.id);
const book = bookStore.find((item) => item.id === id) 
res.send(book)
console.log(book);


})


//now we wanna update it 
app.post( "/book", (req,res)=>{

bookStore.push(req.body)
res.send({newAddition : req.body }  )
console.log(bookStore);

})

when I pushed it, when I upated the array with new item why I didnt see the new item in the array here?, 
it'll be stord in memory RAM . it wont show in UI , Also when I pressed send once again in Postman 
the memroy got refreshed and it showed this 5 books only not the pushed ones, because it is stored in RAM, this is hwy we need a secondary memory when it can be stored


//Deleted books using  params
app.delete( "/book/:id", (req,res)=>{

const id = Number(req.params.id)
const delBook = bookStore.findIndex( (item) =>item.id === id)

const deletedBook = bookStore.splice(delBook, 1)[0];

    res.send({ message: "Book deleted", deleted: deletedBook });

})


//Now use Put, with PUT we do changes in whole body, thats why it is also params, when you wanna delete the whole item you  use the findindex    

app.put( "/book/:id",  (req,res)=>{

const id = Number(req.params.id)    
const index = bookStore.findIndex((item)=> item.id === id )

bookStore[index] = {id,  ...req.body}

res.send("changes added")

})
























*/




/*

I want to send this information in backend, if I want to send info, what method should I use ? POST
name : "John" , age : 20


Difference between JSON and JS object
JSON is a string format where as JS is an object only, you can also check package.json for example
and theg key value both written in string as a text, where as JS object, only value is written in tect not the key

why I said the difference here, we use postman to send any data from frontend to backend, in that , we use POST mmethod as it is used for send data to fend to bend
we can only send the data in JSON format only

Frontend is only HTML CSS JS where as Bend, Server can be written in any language Java,Pyhton,c++. so how can bend will understand JS onbject, I'll tell you wth the scenerio
Ex- we open instagram, we login , those username , password, dp goes like this to backend
person = {
username : "Rohith",
password : "1223",
dp : url("img")

}
can bend language  like python, Java, C++ understand our JS Object , NO, thats why we created this universal format called JSON, thats why it may look like JS, 



this data goes from fend to bend, as we know computer only understands 01 bits, it is easy to convert a string in bits than JS object , it goes like this
Fend -->
{
name  : "Rohith"
age : 20
}

JSON
'{
"name"  : "Rohith"
"age" : 20
}'

who converts here as a string JSON, string to bits, and when we see this console.log(req.body);
we need to parse it with express.json() so that we can see a proper output like this,
{ name: 'John Doe' } 
when parsing a number it might send as a string, and if we are using that data its better to convert it as a number like Number()


*/



