import userServices from '../../services/users'
import userRepository from '../repositories/users'

/**
 * userController :: Object -> Object
 *
 * Expose all user controllers.
 * @param {Object} dependencies
 * @return {Object} Instance of userController.
 */
const userController = ({emailProvider, User}) => {
  // create instance of userRepository
  const repository = userRepository(User)
  // create instance of emailProvider
  const userEmail = emailProvider()

  // controller for post user route.
  const createUser = (req, res) => {
    // get the user inside the body payload.
    const user = req.body
    // invokce createUser service
    userServices
      .createUser({
        user,
        userRepository: repository,
        sendEmail: userEmail.sendEmail
      })
      .fork(
        (resolve) => res.send(resolve),
        (reject) => res.status(400).send(reject)
      )
  }

  return {
    createUser
  }
}

export default userController
