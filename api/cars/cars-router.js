const express = require('express')
const db = require('../../data/db-config.js')

const router = express.Router()

router.get('/', (req, res, next) => {
    
})


router.use((err, req, res, next) => {
    const env = process.env.NODE_ENV || 'development'
    const message = env === 'development' ? err.message : 'something bad happened'
    res.status(500).json(message)
  })

module.exports = router