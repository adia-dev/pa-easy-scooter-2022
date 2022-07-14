const express = require('express');
const pool = require('../db_connection');
const router = express.Router();

pool.connect()

/* POST create new user. */
router.post('/', async (req, res, next) => {

  console.log(req.body)
  const { email, password, firebaseID } = req.body

  const response = await pool.query("INSERT INTO users (email, password_hash, firebase_id, first_name, last_name, display_name, username) VALUES($1, $2, $3, 'user_firstname', 'user_lastname', 'user_display_name', 'username');", [req.body.email, req.body.password, req.body.firebaseID])
  // const { rows } = await pool.query("SELECT * FROM users;", [])
  // res.send(rows)
  console.log(response)
  res.json({ message: "ok", body: req.body })
});


/* GET scooters listing. */
router.get('/', async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM products as p WHERE type = 'scooters' ORDER BY p.id ASC;", [])
  res.send(rows)
});


/* GET one scooter by id. */
router.get('/:id', async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM products as p WHERE type = 'scooters' AND p.id = $1 ORDER BY p.id ASC;", [req.params.id])
  res.json(rows[0] ?? {})
});


module.exports = router;
