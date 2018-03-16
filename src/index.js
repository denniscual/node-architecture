const express = require('express')
const app = express()

app.get(
  '/',
  (req, res) => res.send('Hello World!')
)

app
  .listen(
    3000,
    () => console.log('App listening to port 3000!')
  )

exports.default = app

/**
 * Create simple application using Clean Architecture. The job of app is to save user using REST API then save the data to memory.
 *
 * Rule of thumb:
 *  Our business rules should work and testable even without interacting to external services. Business should not depend or doesn't know anything to outside layers.
 *  Make sure we follow the Dependencry Rule Principles - The flow of dependency towards Higher lever layers. Infrastructure -----> Interface Adapter -----> Use Case ---------> Entity
 *
 * TODO:
 * - Create Entity (Critical Business rules)
 * - Create use case / interactor  (Application Specific Business rules)
 * - Create Interface adapter (Db gateways, controllers) - Use dependency injection for this. JS dont have Interface.
 * - Add Infrastructure (Web frameworks, Persistence utility, View)
 */
