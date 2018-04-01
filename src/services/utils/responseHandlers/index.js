/**
 * TODO: Add test spec.
 * Library for handling response handlers.
 */
import { curry } from 'ramda'

/**
 * successfulResponse :: String -> Object -> Future
 *
 * Create a succesfull response based on the given doc and message
 * @param {String} message
 * @param {Object} doc
 * @return {Object}
 */
export const successfulResponse = curry(
  (message, doc) =>
    ({
      status: 'successfully',
      message,
      doc
    })
)

/**
 * errorResponse :: String -> Future
 *
 * Create a succesfull response based on the given doc and message
 * @param {String | Object} error Object or string which tells the error.
 * @return {Object}
 */
export const errorResponse = (error) => ({
  status: 'error',
  message: error
})
