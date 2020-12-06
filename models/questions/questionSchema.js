const mongoose = require("mongoose")
const questionSchema = mongoose.Schema({
    question: String,
    quizId: String,
    title: String,
    type: String,
    correct: String,
    choices: [String],

},{collection:"questions"})

module.exports = questionSchema
