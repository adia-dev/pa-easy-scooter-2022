require("dotenv").config()
const cors = require("cors")
const express = require('express')
const logger = require('morgan');
const port = process.env.PORT || 3000
const app = express()
const usersRouter = require('./routes/users');

app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v2/users', usersRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})