// let quizzes = require("./quizzes.json")
// const quizModel = require("../models/quizzes/quizModel")
//
// const findAllQuizzes = () => {
//     return quizModel.findAllQuizzes()
// }
// const findQuizById = (qid) => quizModel.findQuizById(qid)
//
// const findAllQuizzesDetails = () => quizModel.findAllQuizzesDetails()
//
// const createQuiz = () =>{
//     const quiz = {title:"New Quiz"}
//     return quizModel.createQuiz(quiz)
// }
//
// const deleteQuiz = (qid) => quizModel.removeQuiz(qid)
//
//
// const updateQuiz = (qid,newQuiz) =>quizModel.updateQuiz(qid,newQuiz)
const quizzesDao = require('../daos/quizzes.dao.server')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)

module.exports = { findAllQuizzes, findQuizById }

