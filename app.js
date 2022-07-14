require("dotenv").config()
const cors = require("cors")
const express = require('express')
const logger = require('morgan');
const port = process.env.PORT || 3000
const app = express()
const usersRouter = require('./routes/users');
const scootersRouter = require('./routes/scooters');
const accessoriesRouter = require('./routes/accessories');
const cartRouter = require('./routes/cart');
const rolesRouter = require('./routes/roles');
const pickupPoints = require('./routes/pickupPoints');

// app.use(bodyParser.json())
app.use(cors());
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/api/v2/users', usersRouter);
app.use('/api/v2/scooters', scootersRouter);
app.use('/api/v2/accessories', accessoriesRouter);
app.use('/api/v2/cart', cartRouter);
app.use('/api/v2/roles', rolesRouter);
app.use('/api/v2/pickups', pickupPoints);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})