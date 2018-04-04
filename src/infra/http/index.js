import express from 'express'
import bodyParser from 'body-parser'

/**
 * server :: Object -> Object
 *
 * Create app server which is running to node.js environment.
 * @param {Object} dependencies
 * @return {Object} Instance of app server.
 */
const server = ({config, apiRouter}) => {
  // create an instance of app.
  const app = express()

  // Config
  app.disable('x-powered-by')
  // Middlewares
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  // inject the database dependency to our router.
  app.use('/api', apiRouter)
  // we define our static folder
  app.use(express.static('public'))

  return {
    start: () =>
      app.listen(3000, () => console.log('Example app listening on port 3000!'))
  }
}

export default server
