const express = require('express');
const pool = require('../db_connection');
const router = express.Router();

pool.connect()

/* POST create new role. */
router.post('/', async (req, res, next) => {
    await pool.query("INSERT INTO roles (name) VALUES($1);", [req.body.name])
    res.json({ status: 200, body: req.body })
});


/* GET users listing. */
router.get('/', async (req, res, next) => {
    const { rows } = await pool.query("SELECT * FROM roles;", [])
    res.send(rows)
});



module.exports = router;
