const mongoose= require("mongoose")
const quizzesSchema = require("./quizzesSchema")
// const quizzesModel = mongoose.model("QuizModel", quizSchema)



const quizzesModel = mongoose.model(
    'QuizModel',
    quizzesSchema
)
module.exports = quizzesModel

//
// const findAllQuizzes = () =>
// {
//     return quizzesModel.find()
// }
//
// const findQuizById = (qid) =>
//     quizzesModel.findById(qid)
//     // quizzesModel.findOne({_id:qid})
//
// const findQuizByIdDetails = (qid) =>
//     quizzesModel.findById(qid).populate("questions").exec()
//
// const findAllQuizzesDetails = () =>
//     quizzesModel.find().populate("questions").exec()
//
// const createQuiz =(newQuiz) =>
//     quizzesModel.create(newQUiz)
//
// const removeQuiz = (qid) =>
//     quizzesModel.remove({_id: qid})
//
// const updateQuiz = (qid,newQuiz) =>
//     quizzesModel.update({_id: qid},{$set:{title:newQuiz}})
//
// module.exports = {
//     findAllQuizzes,findQuizById,createQuiz,removeQuiz,updateQuiz,findAllQuizzesDetails,findQuizByIdDetails
// }
