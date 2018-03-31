/**
 * TODO: Add test spec.
 * Library for handling response handlers.
 */

import { curry } from 'ramda'
import Future from 'fluture'

/**
 * successfulResponse :: String -> Object -> Future
 *
 * Create a succesfull response based on the given doc and message
 * @param {String} message
 * @param {Object} doc
 * @return {Future}
 */
export const successfulResponse = curry(
  (message, doc) =>
    Future.of({
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
 * @return {Future}
 */
export const errorResponse = (error) =>
  Future.reject({
    status: 'error',
    message: error
  })
