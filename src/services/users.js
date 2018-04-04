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

/**
 * TODO: Add test spec.
 * validateUser :: Object(User) -> Object
 *
 * Validating user using validate function.
 * @param {Object} user User data.
 * @param {Object} userRepository Repository for accessing the user data store.
 * @return {Future} Future either resolve or rejected.
 */
const createUser = ({
  user,
  userRepository,
  sendEmail
}) => {
  // validate the the user data.
  const { errors, isValid } = validateUser(user)

  if (isValid) {
    return userRepository
      .create(user)
      .chain(sendEmail)
      .bimap(errorResponse, successfulResponse('Successfully! We sent an email verification.'))
  }

  // else
  return Future.reject(errorResponse(errors))
}

// export all services for the user.
export default {
  createUser
}
