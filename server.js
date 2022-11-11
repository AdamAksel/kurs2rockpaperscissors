const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/modules', express.static(path.join(__dirname, './modules')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))
