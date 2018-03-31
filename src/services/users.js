import { isEmpty } from 'ramda'
import validate, { isNotEmail } from './utils/validate'
import { successfulResponse, errorResponse } from './utils/responseHandlers'
import Future from 'fluture'

/**
 * validateUser :: Object(User) -> Object
 *
 * Validating user using validate function.
 * @param {Object} user User data.
 * @return {Object} Object contains the validation result. Contains errors and isValid properties.
 */
const validateUser = ({username, email, firstName, lastName}) => {
  const resultValidation = validate({
    username: {
      value: username,
      validators: [
        [isEmpty, 'This field should not be empty']
      ]
    },
    email: {
      value: email,
      validators: [
        [isNotEmail, 'Invalid email.'],
        [isEmpty, 'This field should not be empty']
      ]
    },
    firstName: {
      value: firstName,
      validators: [
        [isEmpty, 'This field should not be empty']
      ]
    },
    lastName: {
      value: lastName,
      validators: [
        [isEmpty, 'This field should not be empty']
      ]
    }
  })

  return {
    errors: resultValidation,
    isValid: isEmpty(resultValidation) // if the resultValidation is empty, the data is valid.
  }
}

// User repository for accessing the user data store.
const userRepository = {
  create: (user) =>
    new Future((rej, res) => {
      rej('Error caught when trying to save the user.')
    })
}

/**
 * TODO: Add test spec.
 * validateUser :: Object(User) -> Object
 *
 * Validating user using validate function.
 * @param {Object} user User data.
 * @param {Object} userRepository Repository for accessing the user data store.
 * @return {Future} Future either resolve or rejected.
 */
export const createUser = ({
  user,
  userRepository
}) => {
  // validate the the user data.
  const { errors, isValid } = validateUser(user)

  if (isValid) {
    return userRepository
      .create(user)
      // TODO: Use Either library coming from the folktale - https://github.com/folktale/data.either
      // instead of returning for Future for the handlers that we passed, handlers should return an Either type.
      .bimap(errorResponse, successfulResponse('Successfully add user.'))
  }

  // else
  return errorResponse(errors)
}

// invoke createUser
createUser({
  user: {
    username: 'irishjane',
    email: 'irishjane@gmail.com',
    firstName: 'Irish jane',
    lastName: 'Bulangis-Cual'
  },
  userRepository
}).fork(
  console.error,
  console.log
)
