const mongoose = require('mongoose')
const questionSchema = require('../questions/questionSchema')
const quizAttempts = mongoose.Schema({
    score: Number,
    quiz: {type: mongoose.Schema.Types.ObjectId, ref: 'QuizzesModel'},
    answers: [questionSchema]
}, {collection: 'quizAttempts'})
module.exports = quizAttempts
