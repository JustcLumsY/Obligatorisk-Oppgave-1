(function (){

// Her henter jeg noe fra html fra navnet (Results osv)
const quizcontainer = document.getElementById('quiz');
const resultContaner = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [ 

    //Dette er en ting i lista mi
    // [] = Liste (Javascript)
    {
        question: "Hva heter jeg?",
        answers: {
            a: "Per",
            b: "Pål",
            c: "Espen"
        },
        correctAnswer: "c"
    },
    //Dette er en ting i lista mi
    {
        question: "Hva heter du?",
        answers: {
            a: "Per",
            b: "Stian",
            c: "Espen"
        },
        correctAnswer: "b"
    },
];
const answers = []
for(letter in currentQuestion.answers){
    answers.push(
        <label>
            <input type="radio" name="question${questionNumber}" value="${letter}"></input>
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>
    );
}

output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
);
}

);

quizcontainer.innerhtml = output.join('');
}
// function er noe som gjør noe
function buildQuiz(){
    const output = [];
}

myQuestions.forEach(
    (currentQuestion, questionNumber) => {

    }
// )
// function showResults(){
    
//     const answersContainers = quizcontainer.querySelectorAll('.answers');

//     let numCorrect = 0;

//     myQuestions.forEach( (currentQuestion, questionNumber) => {
//         const answersContainers = answersContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answersContainers.queryselector(selector || {}).value;

//         if(userAnswer === currentQuestion.correctAnswer){
//             numCorrect++;
//             answersContainers[questionNumber].style.color = 'lightgreen';
//         }

//         else{
//             answersContainers[questionNumber].style.color = 'red';
//         }
//     });

//     resultContaner.innerhtml = `${numCorrect} out of ${myQuestions.length}`;
// }

// submitButton.addEventListener('click', showResults);

// }


// })();
