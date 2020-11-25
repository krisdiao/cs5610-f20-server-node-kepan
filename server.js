const express = require("express")
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./services/quiz.service.server")(app)
require("./services/questions.service.server")(app)

app.listen(3000)
