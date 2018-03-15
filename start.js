const express = require('express')
const app = express()

function getName(){
  
}

app.get(
  '/',
  (req, res) => res.send('Hello World!')
)

app
  .listen(
    3000,
    () => console.log('App listening to port 3000!')
  )

/**
 * Try to create simple application using Clean Architecture. The job of app is to create user using REST API then save the data to memory.
 */
