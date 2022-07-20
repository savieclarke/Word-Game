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

$("#score-display").text(score);

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = $(".questions").append('<div class="question-box"></div>')
        //questions.quiz.forEach(tip => {
           //const tipText = $(".question-box").append(questions.quiz);
            //tipText.TextContent = tip

           // $.each(questions.quiz, function(index, value){
              //  $(".question-box").append(value)
                    


            })
       // })

        
  //}) 
}

populateQuestions()