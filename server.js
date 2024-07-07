const express = require('express')
const app = express()
app.use(express.json())
const port = 4000

const { router } = require('./routes/courseRoutes')
app.use('/api/v1', router)

app.listen(port, (err) => {
    console.log(`server is started on port http://localhost:${port}`)
})