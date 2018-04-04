import { Router } from 'express'
import userRouter from './users'

/**
 * router :: Object -> Object
 *
 * Create an API's router
 * @param {Object} dependencies
 * @return {Object} API router.
 */
const router = ({database, emailProvider}) => {
  // main router
  const apiRouter = Router()
  // destructure the database. Get the User model
  const { User } = database
  // inject the user routers.
  apiRouter.use('/users', userRouter({emailProvider, User}))

  return apiRouter
}

export default router
