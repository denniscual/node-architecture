const validator = require('validator')
const { map, not } = require('ramda')

// Predicate function for validating if the data is not empty.
const isNotEmpty = (data) => not(validator.isEmpty(data))

/**
  * Test data: [isNotEmpty, 'This field should not be empty'], 'irish jane'
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
  * Accepts an array of validation rules for each input and return an array of function that accepts the input data.
  * @param {Array} validationRules
  * @return {Array} Array of functions
  * @function
  */
const validateInputs = map(validateInput) // name: [[func, func]]

// Execute the validators on a given input value.
const runValidation = ({value, validators}) =>
  map((pred) => pred(value))(validateInputs(validators)) // return [[func], [func]]

// Validate the input based on the given validators. It return an object which assign an array of possible error messages on each field.
const validate = map(runValidation)

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
