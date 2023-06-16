const express = require('express')
const app = express()
const port = 8000

const pets = require('./petList')

app.get('/', (req, res) => {
  res.send(`
  <h1>Adopt a Pet!</h1>
  <p>Browse through the links below to find your new furry friend:</p>
  <ul>
    <li><a href="/animals/dogs">Dogs</a></li>
    <li><a href="/animals/cats">Cats</a></li>
    <li><a href="/animals/rabbits">Rabbits</a></li>
  </ul>
  `)
})

app.get('/animals/:pet_type', (req, res) => {
    const petType = req.params.pet_type;

    if(petType === "dogs" || petType === "cats" || petType === "rabbits"){
        res.send(`
          <h1>
              ${petType.toUpperCase()}
          </h1>
          <ul>
            ${pets[petType].map(element => 
                `<li>${element.name}</li>`)}
          </ul>
        `)
    }else{
        res.send("<h1>404</h1>")
    }
})

// 9. Lastly, each pet needs its individual profile page. To do that, we’ll add a new route, animals/:pet_type/:pet_id.
app.get('/animals/:pet_type/:pet_id', (req, res) => {
    

    res.send("test it")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})