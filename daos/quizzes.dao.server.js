const quizzesModel = require('../models/quizzes/quizModel')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }
