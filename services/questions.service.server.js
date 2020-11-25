module.exports = (app) => {
    const questions =[
        {_id: "111", question:"What's your favourite color?", quizId:"111"},
        {_id: "112", question:"What's your favourite pet?", quizId:"112"},
        {_id: "113", question:"What's your favourite food?", quizId:"113"},
        {_id: "114", question:"What's your favourite beach?", quizId:"114"},
        {_id: "115", question:"What's your favourite name?", quizId:"115"},
        {_id: "116", question:"What's your favourite drink?", quizId:"116"},

    ]

    app.get("/quizzes/:qid/questions", (req,res)=>{
        const quizId = req.params["qid"]
        const questionsForQuiz = questions.filter(question => question.quizId === quizId)
        res.send(questionsForQuiz)
    })
}


