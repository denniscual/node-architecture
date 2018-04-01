import { Router } from 'express'
import userRouter from './users'

/**
 * router :: Object -> Object
 *
 * Create an API's router
 * @param {Object} dependencies
 * @return {Object} API router.
 */
const router = ({database}) => {
  // main router
  const apiRouter = Router()
  // destructure the database.
  const { userRepository } = database

  // inject the user routers.
  apiRouter.use('/users', userRouter({userRepository}))

  return apiRouter
}

export default router
