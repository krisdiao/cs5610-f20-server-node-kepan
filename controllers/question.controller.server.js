const questionsService = require("../services/question.service.server")
//
// module.exports = (app) => {
//     const findQuestionsForQuiz =(req,res) =>{
//         const quizId = req.params["qid"]
//         questionsService.findQuestionsForQuiz(quizId)
//             .then(questions => res.send(questions))
//     }
//
//     const findAllQuestions = (req,res) =>
//         questionsService.findAllQuestions()
//             .then(questions => res.send(questions))
//
//     app.get("/quizzes/:qid/questions", findQuestionsForQuiz)
//     app.get("/questions", findAllQuestions)
// }

module.exports = function(app) {
    app.get('/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions)))
    app.get('/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}


