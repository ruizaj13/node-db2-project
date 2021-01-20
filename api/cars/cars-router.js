const express = require('express')
const db = require('../../data/db-config.js')

const router = express.Router()

router.get('/', (req, res, next) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    db('cars').insert(req.body)
        .then(vins => {
            db('cars').where({vin: vins[0]})
            .then(newCar => {
                res.status(201).json(newCar)
            })
            .catch(next)
        })
        .catch(next)
})


router.use((err, req, res, next) => {
    const env = process.env.NODE_ENV || 'development'
    const message = env === 'development' ? err.message : 'something bad happened'
    res.status(500).json(message)
  })

module.exports = router