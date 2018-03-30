const validator = require('validator')
const { compose, map, filter, not, isNil, isEmpty } = require('ramda')

// Predicate function for validating if the data is not empty.
const isNotEmpty = compose(not, isEmpty)

// A function which evaluates the error data. If the data is not null or undefined, it returns true. Or else, return false.
const isNotNil = compose(not, isNil)

// Helper function for debugging data on function composition computation.
const traced = (label) => (data) => {
  console.log(`Label: ${label} -> Data: `, data)
  return data
}

/**
  * validate :: Array[Function, String] -> String -> String(Error Msg) || null
  *
  * A function which evaluates the data if it is valid or not based on the predicate function pass.
  * @param {Array} config Array of predicate function and error message
  * @param {String} data Involved data.
  * @return {String | null}
  */
const validateInput = ([predicate, errMsg]) => (data) =>
  predicate(data) ? null : errMsg

/**
  * validateInputs :: Array(a) -> Array(b)
  *
  * Accepts an array of validation rules for each input and return an array of function that accepts the input data.
  * @param {Array} validationRules
  * @return {Array} Array of functions
  */
const validateInputs = map(validateInput)

/**
 * extractNullMessages :: Array -> Array
 *
 * It extracts the null messages on the errors array
 * @param {Array} errors Array of error messages.
 * @return {Array}
 */
const extractNullMessages = filter(isNotNil) // return []

/**
 * runValidationRules :: Object -> Array
 *
 * Execute the validators on a given input value then return an error messages. We will not include the null value on an array.
 * @param {String} value The input data value.
 * @param {Array} validators The validators for the given input.
 * @return {Array} Array of error messages.
 */
const runValidationRules = ({value, validators}) =>
  compose(extractNullMessages, map((validateInput) => validateInput(value)), validateInputs)(validators)

/**
 * validate :: Object(a) -> Object(b)
 *
 * Fork validation rules for the given inputs.
 * @param {Object} data Data which the validate computation apply.
 * @return {Object} Object with the same keys but the value are an array of error messages.
 */
const validate = compose(filter(isNotEmpty), map(runValidationRules))

// Test the validation
// test data
const users = {
  username: {
    value: 'irish jane',
    validators: [
      [isNotEmpty, 'This field should not be empty'],
      [(data) => data.length > 5, 'Length of the field should be greater than 5']
    ]
  },
  email: {
    value: '',
    validators: [
      [validator.isEmail, 'Invalid email.']
    ]
  },
  firstName: {
    value: '',
    validators: [
      [isNotEmpty, 'This field should not be empty'],
      [(data) => data.length > 5, 'Length of the field should be greater than 5']
    ]
  }
}

// run the test.
const result = validate(users)

console.log(result)

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
