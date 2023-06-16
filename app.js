const express = require('express')
const app = express()
const port = 3000

const pets = require('./petList')

// 3. We can create our first route with app.get() on the `/` route. This endpoint should return an <h1> element with the text ‘Adopt a Pet!’. HTML can be returned as a Template literal.
app.get('/', (req, res) => {
  res.send(`<h1>Adopt a Pet!</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})