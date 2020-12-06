const questionsService = require("../services/question.service.server")

module.exports = (app) => {
    const findQuestionsForQuiz =(req,res) =>{
        const quizId = req.params["qid"]
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => res.send(questions))
    }

    const findAllQuestions = (req,res) =>
        questionsService.findAllQuestions()
            .then(questions => res.send(questions))

    app.get("/quizzes/:qid/questions", findQuestionsForQuiz)
    app.get("/questions", findAllQuestions)
}


