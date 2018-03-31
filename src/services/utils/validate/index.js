/**
 * TODO: Add test spec.
 * Library for handling validation to inputs in declarative way and easy to reason about.
 */
import { compose, map, filter, not, isNil, isEmpty } from 'ramda'
import { isEmail } from 'validator'

// Function for validating if the data is not empty.
export const isNotEmpty = compose(not, isEmpty)

// Function for validating if the data is not email.
export const isNotEmail = compose(not, isEmail)

// A function which evaluates the error data. If the data is not null or undefined, it returns true. Or else, return false.
export const isNotNil = compose(not, isNil)

/**
  * TODO: Check the pass arguments type.
  * validateInput :: Array[Function, String] -> String -> String(Error Msg) || null
  *
  * A function which evaluates the data if it is valid or not based on the predicate function pass.
  * Predicate function should be falsy. Falsy function examples - isEmpty, isNotEmail .
  * If falsy function returns true, we add the associated error message.
  * @param {Array} config Array of predicate function (falsy function) and error message
  * @param {String} data Involved data.
  * @return {String | null}
  */
const validateInput = ([predicate, errMsg]) => (data) =>
  predicate(data) ? errMsg : null

/**
  * TODO: Check the pass arguments type.
  * validateInputs :: Array(a) -> Array(b)
  *
  * Accepts an array of validation rules for each input and return an array of function that accepts the input data.
  * @param {Array} validationRules
  * @return {Array} Array of functions
  */
const validateInputs = map(validateInput)

/**
 * TODO: Check the pass arguments type.
 * extractNullMessages :: Array -> Array
 *
 * It extracts the null messages on the errors array
 * @param {Array} errors Array of error messages.
 * @return {Array}
 */
const extractNullMessages = filter(isNotNil) // return []

/**
 * TODO: Check the pass arguments type.
 * runValidationRules :: Object -> Array
 *
 * Execute the validators on a given input value then return an error messages. We will not include the null value on an array.
 * @param {String} value The input data value.
 * @param {Array} validators The validators for the given input.
 * @return {Array} Array of error messages.
 */
const runValidationRules = ({value, validators}) =>
  compose(extractNullMessages, map((test) => test(value)), validateInputs)(validators)

/**
 * TODO: Check the pass arguments type.
 * validate :: Object(a) -> Object(b)
 *
 * Fork validation rules for the given inputs. Remove all keys which the array value is empty.
 * @param {Object} data Data which the validate computation apply.
 * @return {Object} Object with the same keys but the value are an array of error messages.
 */
const validate = compose(filter(isNotEmpty), map(runValidationRules))

export default validate
