// TODO: Check the implementation of express app in ddd-node-app-boilerplate - https://github.com/joshuaalpuerto/node-ddd-boilerplate
const express = require('express')
const app = express()

app.get(
  '/',
  (req, res) => res.send('Hello World!')
)

// start the server.
exports.start = () =>
  app
    .listen(
      3000,
      () => console.log('App listening to port 3000!')
    )
