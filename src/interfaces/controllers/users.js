import userServices from '../../services/users'

/**
 * userController :: Object -> Object
 *
 * Expose all user controllers.
 * @param {Object} userRepository Repository for accessing the datasource.
 * @return {Object} Instance of userController.
 */
const userController = (userRepository) => {
  // controller for post user route.
  const createUser = (req, res) => {
    // get the user inside the body payload.
    const user = req.body
    // invokce createUser service
    userServices
      .createUser({user, userRepository})
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
