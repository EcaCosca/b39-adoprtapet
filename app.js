const express = require('express')
const app = express()
const pets = require('./petList')
const port = 8000


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

app.get('/animals/:pet_type', (req, res) => {
    const petType = req.params.pet_type;
  
    if (petType === "dogs" || petType === "cats" || petType === "rabbits") {
      const typeList = pets[petType];
      
      res.send(`
        <h1>${petType.toUpperCase()}</h1>
        <ul>
            ${typeList.map((element, index) => `
                <li>
                    <a href="/animals/${petType}/${index}">
                        ${element.name}
                    </a>
                </li>
            `)}
        </ul>`);
    } else {
      res.send("<h1>404</h1>");
    }
})

app.get('/animals/:pet_type/:pet_id', (req, res) => {
    const findPet = pets[req.params.pet_type][Number(req.params.pet_id)];
    
    if(findPet){
        res.send(`
        <h1>${findPet.name}</h1>
        <img src="${findPet.url}" alt=${findPet.name}>
        <p>${findPet.description}</p>
        <ul>
        <li>Breed: ${findPet.breed}</li>
        <li>Age: ${findPet.age}</li>
        </ul>
        `)
    }else{
        res.send("<h1>404</h1>");
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})