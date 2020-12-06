const questionModel = require("../models/questions/questionModel")
const questions = require("./questions.json")

const findAllQuestions = () => questionModel.findAllQuestions()

const findQuestionsForQuiz =(quizId) => questionModel.findQuestionForQuiz(quizId)
// {
//         const questionsForQuiz = questions.filter(question => question.quizId === quizId)
//         return questionsForQuiz    }


module.exports = {
    findQuestionsForQuiz,findAllQuestions,
}

