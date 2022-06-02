require("dotenv").config()
const bodyParser = require("body-parser");
const cors = require("cors")
const express = require('express')
const logger = require('morgan');
const port = process.env.PORT || 3000
const app = express()
const usersRouter = require('./routes/users');

// app.use(bodyParser.json())
app.use(cors());
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v2/users', usersRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})