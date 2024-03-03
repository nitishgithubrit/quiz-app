// const questions = [{
//     'que': 'which of the following is a markup language?',
//     'a': 'html',
//     'b': 'css',
//     'c': 'js',
//     'd': 'php',
//     'correct': 'a'
// },
// {
//     'que': 'which of the following is not a markup language?',
//     'a': 'html',
//     'b': 'HTML',
//     'c': 'js',
//     'd': 'htML',
//     'correct': 'c'
// },

// {
// 'que': 'which of the following is used for styling?',
//     'a': 'html',
//     'b': 'css',
//     'c': 'js',
//     'd': 'php',
//     'correct': 'b'
// }
// ]

// let index=0;
// let total = questions.length;
// let right = 0; wrong =0;
// const quesBox = document.getElementById("quesBox")
// const optionInputs = document.querySelectorAll('.options')
// const loadQuestion = () => {

//     if(index === total){
//         return endQuiz()
//     }
//     reset();
//     const data = questions[index]
//     console.log(data)
//     quesBox.innerText = `${index+1}) ${data.que}`;
//     optionInputs[0].nextElementSibling.innerText = data.a;
//     optionInputs[1].nextElementSibling.innerText = data.b;
//     optionInputs[2].nextElementSibling.innerText = data.c;
//     optionInputs[3].nextElementSibling.innerText = data.d;

// }

// const submitQuiz = () => {
//     const data = questions[index];
//     const ans = getAnswer()
//     if(ans === data.correct){
//        right++;
//     }else{
//         wrong++;
//     }
// }

// const getAnswer = () => {
//     optionInputs.forEach(
//         (input) =>{
//             if(input.checked){
//                 return input.value;
//             }
//         }
//     )
// }

// const reset = () => {
//     optionInputs.forEach(
//         (input) => {
//             input.checked = false;
//         }
//     )
// }

// const endQuiz = () => {
//     document.getElementById("box").innerHtml = `
//     <h3> Thank you for playing </h3>  `
// } 
// loadQuestion();


const questions = [{
    'que': 'which of the following is a markup language?',
    'a': 'html',
    'b': 'css',
    'c': 'js',
    'd': 'php',
    'correct': 'a'
},
{
    'que': 'which of the following is not a markup language?',
    'a': 'html',
    'b': 'HTML',
    'c': 'js',
    'd': 'htML',
    'correct': 'c'
},

{
    'que': 'which of the following is used for styling?',
    'a': 'html',
    'b': 'css',
    'c': 'js',
    'd': 'php',
    'correct': 'b'
}
]

let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')

const loadQuestion = () => {
if (index === total) {
    return endQuiz()
}
reset();
const data = questions[index]
quesBox.innerText = `${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
const data = questions[index];
const ans = getAnswer()
console.log(ans, data.correct)
if (ans == data.correct) {
    right++;
} else {
    wrong++;
}
index++;
loadQuestion(); // Move to the next question
return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}

const reset = () => {
optionInputs.forEach(
    (input) => {
    input.checked = false
})
}

const endQuiz = () => {
document.getElementById("box").innerHTML = `
<h3> Thank you for playing </h3>
<h2> ${right} /${total} are correct </h2>
`
}

loadQuestion();
