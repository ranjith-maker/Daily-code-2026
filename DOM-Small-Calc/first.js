



const but = document.querySelector("button");

but.addEventListener("click", ()=> {

//Access the Data  
const input1 = document.getElementById("first");
const  num1 = Number(input1.value);  
  
const input2 = document.getElementById("second");
const num2 = Number(input2.value)

//Add and Output
const res = num1+num2
const re = document.getElementById("result");
re.textContent =  "Result: "+res ;

})


//first we stored it in a variable as input1 ,with input1.value we got access to those entered no.
// In JS whatever the value we get from user JS saves as string in DB so we need to convert it, thatswhy Number()

//For here this Calc what we need 
//we need to add event listener in the button if not then it'd be just design and access the data in the input to add it .



