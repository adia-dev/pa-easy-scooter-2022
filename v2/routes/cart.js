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
router.get('/:id', async (req, res, next) => {
  const { rows } = await pool.query("SELECT shopping_cart_id as cart_id, products.* FROM shopping_carts_products INNER JOIN shopping_carts ON shopping_carts.id = shopping_cart_id INNER JOIN products ON products.id = product_id WHERE user_id = $1 ORDER BY shopping_carts_products.id ASC;", [req.params.id])
  res.send(rows)
});

router.post('/product', async (req, res, next) => {
  await pool.query("INSERT INTO shopping_carts_products (shopping_cart_id, product_id) VALUES($1, $2);", [req.body.shopping_cart_id, req.body.product_id])
  res.json({ status: 200, body: req.body })
});

/* GET scooters listing. */
router.delete('/:id/product/:productId', async (req, res, next) => {
  const { rows } = await pool.query("DELETE FROM shopping_carts_products WHERE shopping_cart_id = $1 AND product_id = $2;", [req.params.id, req.params.productId])
  res.send(rows)
});



module.exports = router;
