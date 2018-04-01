/**
 * Container is reponsible for injecting dependencies to our components (IoC)
 * library for DIP - https://github.com/jeffijoe/awilix
 */
import http from './infra/http'
import database from './infra/database'

// db instance
const db = database()
// app server.
const app = http({database: db})

// running our app server and access our database.
db.start()
app.start()
