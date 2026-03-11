/*
const elem = React.createElement("h1" , {}, "Hello Coder Army"  )
const root = ReactDOM.createRoot(document.getElementById("road"))

root.render(elem)


//this is React 17 way of rendering reactdom
//ReactDOM.render(elem, document.getElementById("road") )

//this is React 18 way of rendering React DOM
// const root = ReactDOM.createRoot(document.getElementById("road"))
// root.render(elem)

First you need to make an variable and create a React  elemeent() inside the braket tagname, {css}, "textcontent"
Second, a variable for ReactDOM. to create the root and (acess it from HTML)
root variable render the created element with its variable


*/

let elem = React.createElement("h2", {id : "first" , className : "one",  style : {color : "white" , fontSize: "33px", backgroundColor : "red"}}, "All is WELL" )
let elem2 = React.createElement("h2",{id : "second" , className : "two",  style : {color : "white" , fontSize: "33px", backgroundColor : "black"}}, "How are you? ")

let div1 = React.createElement("div", {}, [elem,elem2] )

let root = ReactDOM.createRoot(document.getElementById("road"))


root.render(div1)

/*


but now if I need to write it like this and render it

 <div>
    <div>
        <h1>
            <p></p>
        </h1>
    </div>
</div> 

wouldnt it be lil tougher ?, what if we can write just like this in JSX... 
JSX'll tell write it just like you write it in HTML and I'll convert it into react friendly


when we click open with live sever, it sees that React.createelement
now JS doesn't have this, so it goes to the crossorigin of React 1st link
in HTML script tag, it calls that through CDN
when it sees ReactDOM for root, again it makes a call to CDN throught the 2nd link of crossorigin script 
its not a very good approach

also that 1st link of react has 4000 lines of code 130KB , is it necessary fo rus to get all the line of codes, couldn't we just get a needed ones form the file
same with reactDOM
Production Ready Code
Optimized code, removing comments and spaces
code which is written but not useful
Taking oly the needed ones from the both React and React DOM,  the larger the lines of code the slower it is, waht i fI just need it omnly 500lines instead of 4000 
A Production ready code needs to be lightning fast
BUNDLER handles this, reduce the file sizes, after reading HTML<CSS,JS,React, it'll only take the needed ones , it will neglect the unnecessary ones
BUndlers = webpack, Vite, Parcel


when we install any apps to code be it Tailwind, typescript, now parcel, we use npm
what is npm ? somw ppl say NPM is Node Package Manager but
what is inside NPM ?
it has parcel code, typescript code, vite code, all these codes are stored in NPM, even react , reactdom code also, yes it is also inside CDN 
It has so many codes related to JavaScript which helps us in  development related things
we dont need to go for diff places to find these codes - Tailwind, Vite, Typescript
NPM has everything related to JS, run their command get it from me 
NPM is like database for JS related codes

Inside node modules I want parcel only , then why did I get a long list of others
Because even Parcel also has some dependencies, it wasn't written only on its own 

now I no longer need those 2 cdn links of script react and reactdom
I just installed them via npm intall react enter npm inatll react-dom enter
now my package.json has all three parcel react reactdom   "devDependencies": {
    "parcel": "^2.16.4"
  },
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4"

 there are 3 values in version , 19.2.4 --> major.minor.patch 
 what is patch, it means bug fixing, let say tmrw 19.2.6 comes ---> it means some bugs are fixed  in the last version
 when minor no. changes , there are some new functionalities are    being added
when there is an update in minor or patch it'll run in smooth no crash background is ok only
when there is major update let say today 19.2.4 , tmrw 20.0.0 your code will crash you need to modify it accordingly
The ^ caret allows npm to install any version that does not change the major version. It will accept patch and minor updates automatically
Safe because major updates might break your code
    
what is inside package.lock.json
The exact version is inside the package, for ex - I made a project in January and I send my project to my friend in December, he has an updated ones
the code won't run in his system, thats why there is an exact version is there so that they can sue that version to run the project
how ?
when you push it into a github or sharing your project to your friend, delete the node module and share it,
that folder should have package.json and package-lock.json , and your friend opens up a folder he rund npm istall and the same you rversion will be downloaded but outdates not updated but your version 
how ? when the machine runs npm install it sees the package-lock.json , it has the exact version number in which you have created so the npm also installs those versions files and their dependencies
if you delete both node modules and package lock and share it , it looks package.json and installs a latest version of a code
| Shared files                     | Result                                     | Notes                                     |
| -------------------------------- | ------------------------------------------ | ----------------------------------------- |
| Only package.json                | Latest compatible versions (minor & patch) | ^ allows updates                          |
| package.json + package-lock.json | Exact same versions                        | Safe for production or long-term projects |

package-lock.json has a locked that version that's why you get the same old version




*/











