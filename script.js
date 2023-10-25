const questions = [
    {
        question :"what is the smallest continent in the world ?",
        answers : [ 
            {text:"Africa",correct: false},
            {text:"Asia",correct: false},
            {text:"Australia",correct: true},
            {text:"America",correct: false}
    ]
    },
    {
        question :"what is the largest animal in the world ?",
        answers : [ 
            {text:"Lion",correct: false},
            {text:"Giraffe",correct: false},
            {text:"Elephant",correct: false},
            {text:"Blue whale",correct: true}
    ]
    },
    {
        question :"who discorvered America ?",
        answers : [ 
            {text:"Christoph Colomb",correct: true},
            {text:"Albert Einstien",correct: false},
            {text:"General Degol",correct: false},
            {text:"Victor chorcher",correct: false}
    ]
    },
    {
        question :"which is the largest desert in the world ?",
        answers : [ 
            {text:"Kalahari",correct: false},
            {text:"Sahara",correct: false},
            {text:"Antarctica",correct: true},
            {text:"Gobi",correct: false}
    ]
    },
    {
        question :"which country has more population in the world ?",
        answers : [ 
            {text:"India",correct: true},
            {text:"Russia",correct: false},
            {text:"China",correct: false},
            {text:"England",correct: false}
    ]
    },
    {
        question :"what is the largest river in the world ?",
        answers : [ 
            {text:"Amazon River",correct: false},
            {text:"Yellow River",correct: false},
            {text:"Congo River",correct: false},
            {text:"Nile",correct: true}
    ]
    },
    {
        question :"which country is the oldest civilization in the world ?",
        answers : [ 
            {text:"Ancient India",correct: false},
            {text:"Ancient China ",correct: false},
            {text:"Ancient Egypt",correct: false},
            {text:"Mesopotamia",correct: true}
    ]
    },
    {
        question :"which country is the youngest in the world ?",
        answers : [ 
            {text:"Palau",correct: false},
            {text:"South Sudan ",correct: true},
            {text:"Timor-Leste",correct: false},
            {text:"Kosovo",correct: false}
    ]
    },
    {
        question :"which language is most speak language in world ?",
        answers : [ 
            {text:"English",correct: false},
            {text:"Spanish ",correct: false},
            {text:"Mandarin Chinese",correct: true},
            {text:"Hindi",correct: false}
    ]
    },
    {
        question :"which one is deepest ocean in world ?",
        answers : [ 
            {text:"Pacific Ocean",correct: true},
            {text:"Atlantic Ocean",correct: false},
            {text:"Arctic Ocean",correct: false},
            {text:"Indian Ocean",correct: false}
    ]
    }
]

const questiontage = document.getElementById('question');
const answersplace = document.getElementById('anwers');
const nextbotom = document.getElementById('next');

let currentquestionindex = 0;
let score = 0;

function startQuiz(){
    currentquestionindex = 0;
    score = 0;
    nextbotom.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let questionplace = questions[currentquestionindex];
    let questionno = currentquestionindex + 1 ;
    questiontage.innerHTML = questionno + ". "+ questionplace.question;

    questionplace.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersplace.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswers)
    })
}
function resetState(){
    nextbotom.style.display = "none";
    while(answersplace.firstChild){
        answersplace.removeChild(answersplace.firstChild);
    }
}
function selectAnswers(e){
    const selectedbtn = e.target;
    const iscorrext = selectedbtn.dataset.correct === "true";
    if(iscorrext){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect"); 
    }
    Array.from(answersplace.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbotom.style.display = "block"
}

function showscore(){
   resetState();
   questiontage.innerHTML =  `you scored ${score} out of ${questions.length}`;
   nextbotom.innerHTML = "Play Again";
   nextbotom.style.display = "block";
}

function handlenextquestion(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextbotom.addEventListener('click', ()=>{
    if(currentquestionindex < questions.length){
        handlenextquestion();
    }else{
        startQuiz();
    }
})

startQuiz();