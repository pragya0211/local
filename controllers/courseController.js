const { connection } = require('../config/db')

const getData = async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM course`
        await connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.message })
            }
            res.send({ status: 200, response: result })
        })
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const postData = async (req, res) => {
    try {
        const data = req.body;
        const sqlQuery = `INSERT INTO course SET ?`
        await connection.query(sqlQuery, data, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.message })
            }
            res.send({ status: 200, response: result })
        })
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const putData = async (req, res) => {
    try {
        const id = req.params.course_id
        const data ={
            title: req.body.title,
            dept_name: req.body.dept_name,
            credits: req.body.credits
        }
        const sqlQuery = `UPDATE course SET ? WHERE course_id = ${id}`
        await connection.query(sqlQuery, data, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.message })
            }
            res.send({ status: 200, response: result })
        })
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}


const deleteData = async (req, res) => {
    try {
        const id = req.params.course_id
        const sqlQuery = `DELETE FROM course WHERE course_id = ${id}`
        await connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.message })
            }
            res.send({ status: 200, response: result })
        })
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

module.exports = { getData, postData, putData, deleteData }