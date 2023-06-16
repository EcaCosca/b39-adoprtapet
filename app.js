const express = require('express')
const app = express()
const port = 8000

const pets = require('./petList')

// 3. We can create our first route with app.get() on the `/` route. This endpoint should return an <h1> element with the text ‘Adopt a Pet!’. HTML can be returned as a Template literal.
// 5. Let’s have our server output more elements to the page. Inside the res.send() method for your root route, add the following after the <h1> element:
// An <p> element that reads ‘Browse through the links below to find your new furry friend:’.
// An <ul> element with three <li> elements. The unordered list should contain three items: ‘Dogs’, ‘Cats’, and ‘Rabbits’.
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


// 4. Bind the server to a port with the app.listen() method, with a port of your choice (for this exercise we suggest 8000 but any number between ports 1024 and 65535 is valid). Start your server with node app.js (or npm run dev if you installed Nodemon) and open http://localhost:8000 on your browser. You should see the heading displayed on the page!
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})