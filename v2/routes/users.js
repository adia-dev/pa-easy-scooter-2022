const express = require('express');
const pool = require('../db_connection');
const router = express.Router();

pool.connect()

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM users;", [])
  res.send(rows)
});

router.get('/firebase/:id', async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE firebase_id = $1;", [req.params.id])
  res.send(rows[0])
});

module.exports = router;
