import { Router } from 'express'
import userController from '../../../interfaces/controllers/users'

/**
 * userRouter :: Object -> Object
 *
 * Create a router to access the user resources.
 * @param {Object} dependencies
 * @return {Object} User router.
 */
const userRouter = ({userRepository}) => {
  // create instance of Router
  const userRouter = Router()
  // inject the userRepository to our userController.
  const { createUser } = userController(userRepository)

  // Routes
  userRouter.post('/', createUser)

  return userRouter
}

export default userRouter
