let quizzes = require("./quizzes.json")

const quizModel = require("../models/quizzes/quizModel")

const findAllQuizzes = () => quizModel.findAllQuizzes()

const findQuizById = (qid) => quizModel.findQuizById(qid)
// {
//     const quiz = quizzes.find(quiz => quiz._id === qid)
//     return quiz
// }

const findAllQuizzesDetails = () => quizModel.findAllQuizzesDetails()

const createQuiz = () =>{
    // const quiz = {_id:(new Date()).getTime()+"", title:"New Quiz"}
    const quiz = {title:"New Quiz"}
    return quizModel.createQuiz(quiz)
    // quizzes.push(quiz)
    // return quiz
}

const deleteQuiz = (qid) => quizModel.removeQuiz(qid)


const updateQuiz = (qid,newQuiz) =>quizModel.updateQuiz(qid,newQuiz)
// {
//     quizzes = quizzes.map(quiz => quiz._id ===qid ? newQuiz : quiz)
//     return 200
// }
module.exports={
    findAllQuizzes,findQuizById,createQuiz,deleteQuiz,updateQuiz,findAllQuizzesDetails
}
