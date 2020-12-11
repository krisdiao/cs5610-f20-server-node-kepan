// const findAllQuestions = () => questionModel.find()
// const findQuestionForQuiz = (quizId) => questionModel.find({quizId:quizId})

const mongoose = require('mongoose')
const questionsSchema = require('./questionsSchema')
const questionsModel = mongoose.model(
    'QuestionsModel',
    questionsSchema
)
module.exports = questionsModel
