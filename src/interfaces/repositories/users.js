import Future from 'fluture'

/**
 * userRepository :: Function -> Object
 *
 * User repository handles action for accessing the datasource.
 * @param {Model} User
 * @param {Future}
 */
const userRepository = (User) => ({
  create (user) {
    return new Future((reject, resolve) => {
      // Fake implementation.
      resolve(user)
    })
  },
  getUserByID (userID) {
    return new Future((reject, resolve) => {
      User
        .findOneById(userID)
        .then(resolve)
        .catch(reject)
    })
  }
})

export default userRepository
