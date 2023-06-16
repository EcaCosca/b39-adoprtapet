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
    // 12. To tidy it up, let’s go back to our animals/:pet_type/ route, and add an <a> tag inside of each <li> element. The URL we want to link to should follow the pattern animals/:pet_type/:pet_id, where :pet_type is the current route’s pet type, and :pet_id is the pet’s index position in the appropriate array in petList.js.

    // if(petType === "dogs" || petType === "cats" || petType === "rabbits"){
    if(pets[petType]){
        res.send(`
          <h1>
              ${petType.toUpperCase()}
          </h1>
          <ul>
            ${pets[petType].map((element, index) => 
                `<li><a href="/animals/${petType}/${index}">${element.name}</a></li>`)}
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


//     11. In the res.send() method for this route, you need to return:
    // An <h1> element containing the pet’s name.
    // An <img> element with the pet’s photo.
    // An <p> element containing the pet’s description.
    // An <ul> element with two <li> elements, one for the pet’s breed and one for the pet’s age.
    if(findPet){
        res.send(`
          <h1>
              ${findPet.name}
          </h1>
          <img src="${findPet.url}" alt"${findPet.name}">
          <p>${findPet.description}</p>
          <ul>
                <li>Breed: ${findPet.breed}</li>
                <li>Age: ${findPet.age}</li>
          </ul>
        `)
    }else{
        res.send("<h1>404</h1>")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})