import Future from 'fluture'

/**
 * email :: Object -> Empty -> Objet
 *
 * A function which accepts a configuration and return a factory function emailProvider
 * @param {Object} config
 * @return {Object} instance of emailProvider
 */
const email = ({config}) => (_) => ({
  sendEmail: (user) => Future.of(user)
})

export default email
