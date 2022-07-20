const scoreDisplay = $("#score-display");
const questionDisplay = $("#question-display");

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    },

    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },

    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    },

    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },

]

let score = 0;
let clicked = []

$("#score-display").text(score);

function populateQuestions() {

    /* looping through questions*/
    questions.forEach(question => {
        const questionBox = $(".questions").append('<div class="question-box"></div>')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '✒'
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
           const tipText = document.createElement("p")
           tipText.textContent = tip
           questionBox.append(tipText)
        })

/* creating question buttons*/
       const questionButtons = document.createElement('div')
       questionButtons.classList.add('question-buttons')
       questionBox.append(questionButtons)

       /*displaying options on buttons*/
       question.options.forEach((option, optionIndex) => {
          const questionButton = document.createElement('button')
          questionButton.classList.add('question-button')
          questionButton.textContent = option

          questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex + 1, question.correct))

          questionButtons.append(questionButton)

          const answerDisplay = $(".classList").append('<div class="answer-display"></div>')

          questionBox.append(answerDisplay)

          questionDisplay.append(questionBox)
       })
           

       


            })
       // })

        
  //}) 
}

populateQuestions()

/* adding and taking away points based on the chosen answert*/
function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {


    if (optionIndex === correctAnswer) {
        score ++
        $("#score-display").text(score)
       // addResult(questionBox, "Correct!")

    } else {
        score --
        $("#score-display").text(score)
        //addResult(questionBox, "Wrong Answer!")

    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}




function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
  }