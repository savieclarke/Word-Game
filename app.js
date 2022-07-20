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

        /*const logoDisplay = document.createElement('h1')
        logoDisplay.textcontent = "*"
        questionBox.append(logoDisplay)*/

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

          questionButton.addEventListener('click', () => checkAnswer(questionButton, option, optionIndex + 1, question.correct))

          questionButtons.append(questionButton)

          const answerDisplay = $(".classList").append('<div class="answer-display"></div>')
       })
           

                    


            })
       // })

        
  //}) 
}

populateQuestions()

/* adding and takig away points based on the chosen answert*/
function checkAnswer(questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if (optionIndex === correctAnswer) {
        score ++
        $("#score-display").text(score)

    } else {
        score --
        $("#score-display").text(score)

    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}