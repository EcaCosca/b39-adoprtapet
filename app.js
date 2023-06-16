const express = require('express')
const app = express()
const port = 8000

const pets = require('./petList')

// 3. We can create our first route with app.get() on the `/` route. This endpoint should return an <h1> element with the text ‘Adopt a Pet!’. HTML can be returned as a Template literal.
app.get('/', (req, res) => {
  res.send(`<h1>Adopt a Pet!</h1>`)
})
// 4. Bind the server to a port with the app.listen() method, with a port of your choice (for this exercise we suggest 8000 but any number between ports 1024 and 65535 is valid). Start your server with node app.js (or npm run dev if you installed Nodemon) and open http://localhost:8000 on your browser. You should see the heading displayed on the page!
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})