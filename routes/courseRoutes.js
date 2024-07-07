const express = require('express')

const router = express.Router()
const { getData, postData, putData, deleteData } = require('../controllers/courseController')

router.get('/allcourse', getData)
router.post('/allcourse', postData)
router.put('/allcourse/:course_id', putData)
router.delete('/allcourse/:course_id', deleteData)
module.exports = { router }