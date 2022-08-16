// server
const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Enable cors
app.use(cors())


app.get('/', (req, res) => {
  res.json('hi')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

