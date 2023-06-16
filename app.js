const express = require('express')
const app = express()
const port = 8000

const pets = require('./petList')

app.get('/', (req, res) => {
  res.send(`
  <h1>Adopt a Pet!</h1>
  <p>Browse through the links below to find your new furry friend:</p>
  <ul>
    <li>Dogs</li>
    <li>Cats</li>
    <li>Rabbits</li>
  </ul>
  `)
})

// 6. We have our root route nicely underway! Next we need a route to show lists of each animal type: dogs, cats and rabbits. To do that, we’ll add a new app.get(), with /animals/:pet_type as our path, where :pet_type is a dynamic parameter.
app.get('/animals/:pet_type', (req, res) => {
    const petType = req.params.pet_type;

  res.send(`
  ${petType}
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})