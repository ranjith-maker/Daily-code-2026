



// So as we said, User copies a cookies token before logout and after logsout he uses the copied token to make request, here we wanna introduce redis, when the user logsout, redis keeps the token as a cache and we need to set a time as well for the token to get deleted like 30 mins so that redis wont Db wont get filled

// So go to redi.io
// Login with google sign in
// Free plan only 30Mb

// For Node.js
// import { createClient } from 'redis';

// const client = createClient({
//     username: 'default',
//     password: 'NYZDnVJaSNJNpQMKehU9H7bV2NS2ubnQ',
//     socket: {
//         host: 'redis-12656.crce276.ap-south-1-3.ec2.cloud.redislabs.com',
//         port: 12656
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar
// npm i redis
// Create config folder inside redis.js file
                                                                                                                           
// node config/redis.js to see whether it is connected or not 
// Connected to Redis

// Redis.js
// import { createClient } from "redis";

// const client = createClient({
//   username: 'default',
//     password: 'PASS_KEY',
//     socket: {
//         host: 'redis-12656.crce276.ap-south.redislabs.com',
//         port: 1264
//     }
// });

// const ConnectRedis = async ( )=> {
    
//     await client.connect()
// console.log("Connected to Redis");

// }

// ConnectRedis()

// We can connect all three of them in a clean code
// Reddis, Mongodb, server port

// const initializeConnection = async()=> {

//     try {
        
//      await Redisclient.connect()
//      console.log("connected to Reddis");
     
//      await main()
//      console.log("connected to DB");

//     const PORT = process.env.PORT 
//     app.listen( PORT ,  ()=>{
//         console.log("Listening at", PORT);
        
//     }   )

//     } catch (err) {
//         console.log("Error" + err );
        
//     }}

 
// initializeConnection()






// we can optimize it  with Promise as well
// const initializeConnection = async()=> {
//     try {
       
// await Promise.all([ main() , ConnectRedis()])
//     const PORT = process.env.PORT 
//     app.listen( PORT ,  ()=>{
//         console.log("Listening at", PORT); 
//     } )
//     } catch (err) {
//         console.log("Error" + err );
//     }}
// initializeConnection()


// It is upon us for deciding that how long the data will be alive in the Redis cache ?
// We can design it like 5 mins or 2 days for any data
// Redis also have multiple server by sharding it, 


