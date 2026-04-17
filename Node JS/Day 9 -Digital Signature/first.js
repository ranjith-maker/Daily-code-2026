
import express from "express"
import main from "./database.js";
import User from "./user.js"
import ValidateUser from "./utils/ValidateUsers.js";
import bcrypt from "bcrypt"


const app = express()

app.use(express.json())


app.post("/register", async (req, res) => {

  try {
    //first I wanna do API  level validation
    ValidateUser(req.body)

//before putting it into the DB, let me convert the password into Hash
let pass = req.body.password
req.body.password = await bcrypt.hash(pass,10)

    await User.create(req.body);
    res.send("User registered details successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});


app.post( "/login" , async (req,res)=>{

     try{

    const him = await User.findById(req.body.id)

    if(!(req.body.emailId === him.emailId)){
        throw new Error("Incorrect Email or Password") 
    }

const isSame = await bcrypt.compare(req.body.password, him.password)

if(!isSame){
    throw new Error("Incorrect Email or Password")
}

res.send("Loggedin Successfully")
    }catch(err){
        res.send("Error" + err.message)
    }

})



app.get( "/info", async (req,res)=>{

try{

const ans = await User.find()
 
res.send(ans)

} catch (err){ res.send("Error" + err.message)
}    

})



app.get( "/user/:id" , async(req,res)=>{

try{

const ans = await User.findById(req.params.id)
res.send(ans)

} catch (err){ res.send("Error" + err.message) }


})


app.delete("/user/:id", async (req,res) =>{

try{
 await User.findByIdAndDelete(req.params.id)
res.send("Deleted successfully" )

} catch (err) {
    res.send("Error" + err.message)
}

})


//lets say I need to change Harsh age and gender 





app.patch( "/user" , async(req,res)=>{

try {
     const {id, ...update} = req.body
    await User.findByIdAndUpdate(id,update, {runValidators : true  } )
res.send("Updated successfully")


} catch (err) {
    res.send("Error" + err.message)
}

})



main()
.then(()=>{

    console.log("Connected DB");
    app.listen(2000 , ()=>{
        console.log("Listening at 2000")
        
    })
    

})
.catch((err)=>console.log(err) )








//    "emailId": "salsil@gmail.com",
//    "password": "sallysillY@%@$0)",

/*

now first user enters email & password , the req went to DB , it was same, so it server returned the home page of his a/c. 
now user opens his friend chat, server req goes again and checks if this is the same person asking it, or someone else(hacker) is using this url with my username he doesnt have password, using my username he is trying to access my chats
The Solution is ,
1- username and password
1) Previously how it handled was everytime client sends a req to DB , server takes all the info the client to DB to check, this was made for all the features. That hacker doesnt have my password right , But I do have mine
the problem with this solution is client sends username & password to authenticate verify, server picks up to the DB , and DB verifies and then replies back to server as OK ==> and server shows chat page to user, Everytime DB request and verifying is both time consuming and AWS bill consuming 

2)Session ID
Ex- when you go to movies , you park your bike , you get a token with a no. like 20 , he also has notes down your bike no.1020 = 20  and after when returing home you need to show the same token ID 20 and the lot boy will check his own , Oh yes , this is your bike , you can take it     
same thing happens in Instagram 
when you login you get the session ID , and Instagram also maintains it record its own and gives it to other servers as well, so that when you make req to the server, if that server is busy loadbalancer will send redirect you to another server , and it goes to other server, it can also identify you. Just like parking lot there'll be a team, if not that guy, other ones might help only htat guy shared the IDs 
username - ID, rohitnegi - 50, It was stored in server only not in DB . now whenever as a user you send a request after logging in I interact with the Session ID only 
the problem with session ID is what if the hacker gets it, he can access the your content or dashboard easily , just like the parking lot guy when you show the same ID he might give your bike to others as well, he is not recording your face but your ID only.

3) When you go to hotel for parcel not dining, you get the bill or token to the server boys they will giveb you the food, they wont verify if it yours, if the bill comes from you then its yours only, Obvious reaction, yes, also the bill giver also wont maintain the track as that is yours, that he gave This Very BIll to YOU , even when you go to College, the gate keeper wont check is it yours. because that ID card has College Signature, hotel bill has hotel logo
can we do something similar to instagram ? This is where Digital SIgnature comes into the picture  DS.
how to maintain messgae integrity? when we send message to others like, Send $100 to Mohith, what if it could become $200 to Rohith
A hashcode will be created here, not salting just hashcode only, Send $100 to Mohith , hgftgijdfj8iw863478w68jmlm goes to the receiver both message and hashcode and in the receiever end he gets the message , he'll convert the message into hashcode, he checks came hascode and his converted hashcode are same , then it is good                                                                           
but the hacker can get both the message and Hashcode Send $100 to Mohith , and change this to Send $100 to Arun made a hashcode to this and now receiver got this message and its hashcode, and he converts it so same , got problem again , how to solve this now ?, how can I confirm this messsage came from sender or hacker ?
This is where the Digital Signature comes
We use KEYS here, whoever uses internet has Public keys and Private keys of thier own
and everyone can see my public key , be it server, hacker, receiver, not private key
so when I send msg , Send $100 to Mohith, hascode and I encrypt this hashcode with my private key,this is what they call signature,
The signature is created using the private key and the message hash, not just the key alone.
you send (Message, signature) and I send this to server in receiveing end , converts the hashcode with my public key, reads the converted ones message and the original message same , done, but now the hacker also has my public key so he gets the msg before the server,sees the original msg, but can't change here , why to change , he needs your private key to send as a signature to the receiver, thats where reciever wins, receiver only converts the signature into a message with your public key and the message and decrypted signature is same , so he acts upon it.

 
✔ Yes, the server expects both message and signature
✔ The signature is what proves authenticity and integrity
❌ But the server does NOT “trust” it — it verifies it using sender's public key

AI explanation is also good only

You’re very close, but there’s one critical misunderstanding that’s causing the confusion. The attacker **cannot do what you described** if digital signatures are used correctly.

Let’s straighten it out step by step.

---

## 🔐 First: Your hash-only approach (why it fails)

What you described initially:

* Sender sends:

  ```
  Message + Hash(message)
  ```
* Receiver recomputes the hash and compares

✔ This ensures **integrity**
❌ But NOT **authenticity**

Because a hacker can:

* Change the message
* Recompute a new hash
* Send both → receiver accepts it

So yes, this is broken 👍

---

## 🔑 Now: Digital Signature (the correct fix)

This is part of Digital Signature

### What actually happens:

1. Sender creates hash:

   ```
   H = Hash("Send $100 to Mohith")
   ```

2. Sender **encrypts the hash using their PRIVATE key**:

   ```
   Signature = Encrypt(H, SenderPrivateKey)
   ```

3. Sender sends:

   ```
   Message + Signature
   ```

---

## 📥 On the receiver side:

1. Receiver computes:

   ```
   H1 = Hash(received message)
   ```

2. Receiver decrypts signature using **sender’s PUBLIC key**:

   ```
   H2 = Decrypt(Signature, SenderPublicKey)
   ```

3. Compare:

   ```
   H1 == H2 → Valid
   ```

---

## ❗ Your confusion: “Hacker can recompute and send again”

Here’s the key correction:

> The hacker **CANNOT create a valid signature**.

Why?

Because:

* To create a signature, you must use the **sender’s PRIVATE key**
* The hacker **only has the PUBLIC key**

---

## 🚫 What hacker can do vs cannot do

### Hacker CAN:

* Read the message (if not encrypted)
* Modify the message
* Create a new hash

### Hacker CANNOT:

* Generate a valid signature for the modified message
  (because they don’t have the private key)

---

## 💥 What happens if hacker tampers?

Hacker sends:

```
"Send $100 to Arun" + fake signature
```

Receiver:

* Computes hash → H1
* Decrypts signature using public key → H2

Now:

```
H1 ≠ H2 ❌
```

➡ Receiver rejects it

---

## 🔐 Why public key doesn’t help the hacker

This is where your reasoning slipped:

> “Hacker uses public key to recompute hash and send”

That’s not how it works.

* Public key is used only to **VERIFY**, not to **SIGN**
* Signing requires **private key**

This is based on Public-key cryptography

---

## 🧠 Final clarity (important)

| Feature      | Hash only | Digital Signature |
| ------------ | --------- | ----------------- |
| Integrity    | ✅         | ✅                 |
| Authenticity | ❌         | ✅                 |
| Tamper-proof | ❌         | ✅                 |

---

## 🔑 One-line intuition

* Hash = “Did message change?”
* Signature = “Who sent it + Did it change?”

---

If you want, I can walk you through a **real-world example like how UPI or HTTPS uses this**, which makes it even clearer.


*/