const mongoose= require("mongoose")
const quizSchema = require("./quizSchema")
const quizModel = mongoose.model("QuizModel", quizSchema)

const findAllQuizzes = () =>
    quizModel.find()

const findQuizById = (qid) =>
    quizModel.findById(qid)
    // quizModel.findOne({_id:qid})

const findQuizByIdDetails = (qid) =>
    quizModel.findById(qid).populate("questions").exec()

const findAllQuizzesDetails = () =>
    quizModel.find().populate("questions").exec()

const createQuiz =(newQuiz) =>
    quizModel.create(newQUiz)

const removeQuiz = (qid) =>
    quizModel.remove({_id: qid})

const updateQuiz = (qid,newQuiz) =>
    quizModel.update({_id: qid},{$set:{title:newQuiz}})

module.exports = {
    findAllQuizzes,findQuizById,createQuiz,removeQuiz,updateQuiz,findAllQuizzesDetails,findQuizByIdDetails
}
