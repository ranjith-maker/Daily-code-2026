
//Practising THIS Keyword

SECTION 1: Objects and OOPS Thinking (Foundation)
	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
    name: "Rohith",
    email : "drrr@gmail.com",
    log : ()=>{
    console.log( "user loggedin");
    }
}
user.log() ----->user loggedin


	2.	Imagine you now have 5 users.
First, think how you would manage them without using a class.
Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.




First Normal Approach
let user1 = {
    name:"RRR",
    age:20
}

console.log(user1);

let user2 = {
    name:"RRR",
    age:20
}

console.log(user2);

let user3 = {
    name:"RRR",
    age:20
}

console.log(user3);

let user4 = {
    name:"RRR",
    age:20
}

console.log(user4);

let user5 = {
    name:"RRR",
    age:20
}

console.log(user5);

Now Class Approach


class Account {
    constructor (naam,aag) {
this.name = naam
this.age  = aag
    }
  log(){
   console.log("this is logged in");
     
}

let user1 = new Account("Rohith", 10)
let user2 = new Account("Mohith", 15)
let user3 = new Account("Mohan", 20)
let user4 = new Account("Rohan", 25)
let user5 = new Account("Ayush", 30)
console.log(user1,user2,user3,user4)

Now the prototype(logged-in) has become a Shared memeory


	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

let product = {
    name : "Toy",
    price: 500,
    discount : 10,
    disc : function(){
       let finalPrice = this.price - this.price * this.discount/100
    return finalPrice
    } 
}

console.log(product.disc()) ---> 450


SECTION 2: Classes and Objects

4.	Create a Car class with the following:
Brand speed, a drive method that prints the car brand and speed

class Car{
constructor (bran, sped){
    this.brand = bran;
    this.speed = sped;

}
drive (){
    return this.brand + "-" + this.speed
}
}
let car1 = new Car("Feraari", "150kM/hr")

console.log(car1);
in Browser console type ---> car1.drive()
'Feraari-150kM/hr'



	5.	Create two different car objects from the same class and verify that their data is different.

class Car{
constructor (bran, sped){
    this.brand = bran;
    this.speed = sped;

}
drive (){
    return this.brand + "-" + this.speed
    
}

}
let car1 = new Car("Feraari", "150kM/hr")
let car2 = new Car("Hyundai", "100KM/hr")
console.log(car1); ---> Car { brand: 'Feraari', speed: '150kM/hr' }
console.log(car2); ----> Car { brand: 'Hyundai', speed: '100KM/hr' }



	6.	Answer this in your own words:
If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

We have to keep creating objects
Before Classes we used to be less lazy and more tolerant to read long long codes. And didn't flinch to solve small problems which took more hours


SECTION 3: Constructor and this keyword
	7.	Create a Student class whose constructor accepts name and roll number
Add a method introduce that prints both values.
	

class Student {
    constructor(naam,raalno){
        this.name = naam;
        this.rollno = raalno;
    }
    showUp (){
        return this.name , this.rollno
    }
}

let stud1 = new Student("Rohith", 60)
let stud2 = new Student("Mohith", 50)
console.log(stud1);     ----->Student { name: 'Rohith', rollno: 60 }    
console.log(stud2);    ----> Student { name: 'Mohith', rollno: 50 }
In browser console
stud1.showUp()
'Rohith 60'
stud2.showUp()
'Mohith 50'



8.	Inside the constructor, set values using this.
Then try removing this and notice what error occurs and why.
	
In the above if we remove this from inside the constructor and try to run we get undefined undefined



9.	Create an object with two methods:
One method using a normal function
One method using an arrow function

Inside both, print this and observe the difference.

The goal is to clearly understand how this works and when it changes.

As we know This only works with Normal function and won't work with Arrow function 


let obj = {

sayFunc : function (){
    console.log(this);
    
},
sayArrowFunc : ()=>{
    console.log(this);    
}

}

obj.sayFunc()    ----> you get an object
obj.sayArrowFunc() ---> you get an window, why, Arrow Function takes it form their parent (surrounding lexical scope) here it's surrounding is obj , obj is made in Global, if it is global you get window for this Arrow Function












