const { log } = require('console');
const {MongoClient} = require('mongodb')
//MongoClient is a class


//we created this link in mongodb atlass , https://cloud.mongodb.com/v2/69df3627e549bc2b9d7641e7#/overview 
// and we created our DB as codingji in mongodb compass using this link only, now using this same we're gonna connect teh Bend to DB
//it sees this URL to connect, it from // :username and password is until @ after that @it considers evrything as a cluster part, thast why you see two @ below in the URL, so if you have @ in your password remove it and writr this - %40
const url = "mongodb://ranijth:opkl-p@w2uoie-shard-00-00.heb9ard.mongodb.net:27017d-0&authSource=admin&appName=Coding"
//we're gonna create a instance for the class with new by saving in a variable
const client = new MongoClient(url)

const dbName = "coderarmy" // exact DB we craeted clicking + plus

async function main() {
 //now connecting my Bend to DB. here client is the object we defined above with new also passed our url in it
//why we write await, bcoz it takes millisec time ,
 await client.connect();
console.log("connected sucessfully to the server");
//with above URL we connected with the cluster, only with below line we're conncting with DB , which is DB name we created in mongoDB compass app
const db = client.db(dbName)
// here we connect with the collection user , because inside a DB there'll be multiple collection that s why we need to pecify as whiuch collection
const collection = db.collection("user") 
//this above db and collection is not connecting thats why we didnt write await, when a 

//this toArray() is fetching the data from DB to server not colllection.find(). this .toArray() is keeping all collections {} in a array and gets it to us.
//now say what if there is 5Gb of collections and you are calling this in an array like this ".toArray" it'll get you all the data putting in a single array , you'll get it in one shot, your RAM'll be gone
// instead when you have a large data you can iterate over an array , get it one by one

// for await (let obj of data){
//     console.log(obj);
// }
// by iterating over an array, it'll come like 1st one and 2nd anad 3rd and 4th and 5th, all data wont come and get printed on once, it comes prints again comes prints ... 1 object can be 1MB so it is feasible way to run                                                                
// const data = await collection.find().toArray()
// console.log('user =>', data);

//to add documents from here

const add = await collection.insertOne( {name : "Soham" , age : 33 })
console.log("newAddons :", add );

return "done";
}


//called the function
main()
.then(console.log)
.catch(console.log)
.finally(()=> client.close())









