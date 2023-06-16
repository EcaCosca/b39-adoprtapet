const express = require('express')
const app = express()
const port = 8000

const pets = require('./petList')

app.get('/', (req, res) => {
//     8. We’re ready to start routing our application! Back in the `/` route, add an <a> tag inside each <li> element:
// Dogs should redirect to /animals/dogs
// Cats should redirect to /animals/cats
// Rabbits should redirect to /animals/rabbits
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

// 6. We have our root route nicely underway! Next we need a route to show lists of each animal type: dogs, cats and rabbits. To do that, we’ll add a new app.get(), with /animals/:pet_type as our path, where :pet_type is a dynamic parameter.
app.get('/animals/:pet_type', (req, res) => {
    const petType = req.params.pet_type;

//     7. Have this route return in its res.send():
    // An <h1> element with the text ‘List of :pet_type‘, where :pet_type is the value that comes from the req.params object.
    // An <ul> element, with as many <li> elements inside as there are pets in the same type of animal coming from petList.js(hint).

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

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})