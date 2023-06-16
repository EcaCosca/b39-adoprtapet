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

    // if(petType === "dogs" || petType === "cats" || petType === "rabbits"){
    if(pets[petType]){
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
    // 10. In the callback for that route, create a variable called findPet, that will search the pets object from petList.js for a single pet. You can access the key dynamically based on the value of the :pet_type parameter. Then, you can use the :pet_id parameter to access the index position of the pet in the array.
    const findPet = pets[req.params.pet_type][req.params.pet_id]

    res.send(findPet)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})