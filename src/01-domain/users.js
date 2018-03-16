/**
 * User usecases is a business logic of user
 */
exports.createUser = ({
  user,
  isValidUser,
  addUser,
  successfulResponse,
  errorResponse
}) => {
  if (isValidUser) {
    // add user
    return addUser(user)
      .fork(
        errorResponse,
        successfulResponse
      )
  }
  // execute error.
  errorResponse('The user data is not valid')
}
