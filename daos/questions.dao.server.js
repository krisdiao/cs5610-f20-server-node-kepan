const questionsModel = require('../models/questions/questionModel')
const quizzesModel = require('../models/quizzes/quizModel')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
    .populate('questions').then(quiz => quiz.questions)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }
