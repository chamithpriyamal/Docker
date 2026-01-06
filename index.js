const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Automation Test Final</h1>')
})

const PORT = 8080

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})

