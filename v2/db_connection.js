const { Pool } = require('pg')
const config = require('./config')

const pool = new Pool(
    {
        connectionString: process.env.DB_URL,
        // ssl: {
        //     rejectUnauthorized: false
        // }
    }
)

module.exports = pool