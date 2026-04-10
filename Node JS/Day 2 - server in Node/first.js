const http = require("http")

const server = http.createServer((req,res)=>{

  if(req.url === "/" ){
         res.end("Hello Coder Army ")
  }else if(req.url === "/contact"){
    res.end("This is our contact page")
  }else if(req.url === "/about"){
    res.end("This is our About page")
  }else{
    res.end("404 : NOT Found")
  }
  
});

server.listen(3000 ,()=>{
  console.log("Am listening at port no. 3000");
  
} )


/*


we can do routing as well

we craeted routing with this , routing of 4 pgs, HCA, abiut , Contact, 404 error page
Just restart the server once again ctrl +c node first.js

const server = http.createServer((req,res)=>{

  if(req.url === "/" ){
         res.end("Hello Coder Army ")
  }else if(req.url === "/contact"){
    res.end("This is our contact page")
  }else if(req.url === "/about"){
    res.end("This is our About page")
  }else{
    res.end("404 : NOT Found")
  }
  
});


here we just the HTML CSS JS only here thats it

we'll create server in Express from tomorrow






http.createServer() , it returns me an object and I stores in server variable

server.listen(3000 ,()=>{
  console.log("Am listening at port no. 3000");
  
} ) it takes a CB
server.listen(3000) ---> by this were teeling I wanna be listened by this port no.


Anyone who comes to my server I need to respond right... serve their intended request
const server = http.createServer((req,res)=>{

  res.end("Hello Coder Army")
  

})

while creating a server am also making reponse as well, sp that anyone request they get htis response

you created the server , you made a response
now, how will you host it?

Type it in google and you should keep the terminal open, so it runs and shows us
I typed localhost://3000 I got this, Hello Coder Army as a text
here 3000 is a port no.
localhost is IP address
now we returned only text, we'll return an HTML CSS JS as well as a real time app

here, 
CLient is our browser, Our System is our Server




*/


