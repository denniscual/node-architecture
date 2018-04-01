import User from './model'
import repository from './repository'

const userRepository = repository(User)

export {
  User as default,
  userRepository
}
