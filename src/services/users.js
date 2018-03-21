// userRepository is injected via DIP. We will use awlix for DIP - https://github.com/jeffijoe/awilix
exports.createUser = ({
  user,
  isValidUser,
  userRepository,
  successfulResponse,
  errorResponse
}) => {
  if (isValidUser) {
    // add user
    return userRepository.addUser(user)
      .fork(
        errorResponse,
        successfulResponse
      )
  }
  // execute error.
  errorResponse('The user data is not valid')
}
