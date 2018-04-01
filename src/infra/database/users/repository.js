import Future from 'fluture'

/**
 * userRepository :: Function -> Object
 *
 * User repository handles action for accessing the datasource.
 * @param {Model} Model
 * @param {Future}
 */
const userRepository = (Model) => ({
  create (user) {
    return new Future((reject, resolve) => {
      // Fake implementation.
      resolve(user)
    })
  },
  getUserByID (userID) {
    return new Future((reject, resolve) => {
      Model
        .findOneById(userID)
        .then(resolve)
        .catch(reject)
    })
  }
})

export default userRepository
