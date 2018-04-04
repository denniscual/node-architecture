/**
 * Container is reponsible for injecting dependencies to our components (IoC)
 * library for DIP - https://github.com/jeffijoe/awilix
 */
import http from './infra/http'
import database from './infra/database'
import email from './infra/email'
import router from './infra/http/router'

// a function which creates an email provider instance.
const emailProvider = email({})
// database instance
const db = database()
// router instance
const apiRouter = router({database: db, emailProvider})
// http instance.
const app = http({apiRouter})

// we need to export the instance of our db and app. Invoke those infrastructure to our start file which is resided on our root project.
export default {
  dbStart: db.start,
  appStart: app.start
}
