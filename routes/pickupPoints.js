const express = require('express');
const pool = require('../db_connection');
const router = express.Router();

pool.connect()

/* POST create new pickup point. */
router.post('/', async (req, res, next) => {
    await pool.query("INSERT INTO roles (address_id) VALUES($1);", [req.body.id])
    res.json({ status: 200, body: req.body })
});


/* GET pickup points listing. */
router.get('/', async (req, res, next) => {
    const { rows } = await pool.query(`
        SELECT pp.id as pp_id,*
        FROM pickup_points pp
                INNER JOIN addresses a ON a.id = pp.address_id;
    `, [])
    res.send(rows)
});

router.get("/:id/scooters", async (req, res, next) => {


    const { rows: scooters } = await pool.query(
        `SELECT *
            FROM pickup_point_scooters pps
                    INNER JOIN pickup_points pp on pp.id = pps.pickup_point_id
                    INNER JOIN scooters s on s.id = pps.scooter_id
                    INNER JOIN scooter_models sm on sm.id = s.model_id
            WHERE pps.pickup_point_id = $1;`, [req.params.id]
    );

    console.log(req.params.id)

    res.send({ status: 202, scooters })
})



module.exports = router;
