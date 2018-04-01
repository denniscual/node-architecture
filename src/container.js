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

// we need to export the instance of our db and app. Invoke those infrastructure to our start file which is resided on our root project.
export default {
  dbStart: db.start,
  appStart: app.start
}
