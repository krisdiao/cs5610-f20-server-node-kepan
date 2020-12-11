let quizzes = require("./quizzes.json")
const quizzesDao = require('../daos/quizzes.dao.server')
const quizModel = require("../models/quizzes/quizzesModel")

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}
const findQuizById = (qid) => quizzesDao.findQuizById(qid)

// const findAllQuizzesDetails = () => quizzesDao.findAllQuizzesDetails()
//
// const createQuiz = () =>{
//     const quiz = {title:"New Quiz"}
//     return quizzesDao.createQuiz(quiz)
// }
//
// const deleteQuiz = (qid) => quizzesDao.removeQuiz(qid)


module.exports = { findAllQuizzes, findQuizById,}

