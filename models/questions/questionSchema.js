const mongoose = require("mongoose")
const questionSchema = mongoose.Schema({
    question: String,
    quizId: String,
    title: String,
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
    correct: String,
    choices: [String],

},{collection:"questions"})

module.exports = questionSchema
