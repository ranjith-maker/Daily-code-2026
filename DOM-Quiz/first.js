
const quizData = [
    {
        question: "Who has the most centuries in international cricket?",
        options: [
            "Sachin Tendulkar",
            "Virat Kohli",
            "Ricky Ponting",
            "Jacques Kallis"
        ],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup?",
        options: [
            "Australia",
            "England",
            "West Indies",
            "India"
        ],
        answer: "West Indies"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: [
            "Virat Kohli",
            "Don Bradman",
            "MS Dhoni",
            "Sachin Tendulkar"
        ],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest individual score in ODI cricket?",
        options: ["264", "200", "237", "275"],
        answer: "264"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: [
            "Muttiah Muralitharan",
            "Shane Warne",
            "James Anderson",
            "Anil Kumble"
        ],
        answer: "Muttiah Muralitharan"
    }
];


const quizForm = document.querySelector("form")

quizData.forEach((val,idx)=>{

    let clutter = "";
val.options.forEach((otp)=>{
    clutter +=    ` <label>
        <input type="radio" name="q${idx}" value="${otp}"> ${otp}
       </label><br>`
})    

const quesDiv = document.createElement("div")
quesDiv.classList.add("question")

quesDiv.innerHTML = ` <p>   ${idx + 1}. ${val.question} </p> ${clutter} ` 

quizForm.appendChild(quesDiv)

})


quizForm.innerHTML += ` <button type="submit" class="submit-btn">Submit</button>` 

const out = document.getElementById("output")

quizForm.addEventListener(("submit"), (ev) =>{

ev.preventDefault();

const data = new FormData(quizForm)

let score = 0;
for(let [key, val] of data.entries()){
    const index = Number(key.replace("q", "")) 
    if(val === quizData[index].answer )
score++;

    }
console.log(score);

out.innerText = `You scored ${score} out of ${quizData.length} `

})





// const quizForm = document.querySelector("form")

// quizData.forEach((val, idx) => {
//     const questionDiv = document.createElement("div");
//     questionDiv.classList.add("question");

//     let clutter = "";
// //here we're doing foreach for options in teh above Array of objects
// val.options.forEach(opt => {
//         clutter += `
//             <label>
//                 <input type="radio" name="q${idx}" value="${opt}">
//                 ${opt}
//             </label><br>
//         `;
//     });

// //  <label> <input type="radio" name="q1" value="Sachin Tendulkar" this is made with opt there > Sachin Tendulkar this also apt there
// //  </label><br></br>


//     questionDiv.innerHTML = `
//      <p>${idx + 1}. ${val.question}</p>
//         ${clutter}
//     `;

//     quizForm.appendChild(questionDiv);
// });

// // Add submit button
// quizForm.innerHTML += `<button type="submit" class="submit-btn">Submit</button>`;

// const out = document.getElementById("output")


// quizForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const data = new FormData(quizForm);
//     let score = 0;

//     for (let [key, val] of data.entries()) {
//         const index = Number(key.replace("q", ""));
//         if (val === quizData[index].answer) {
//             score++;
//         }
//     }

//     out.innerText = `You scored ${score} out of ${quizData.length}`;
// });




