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
