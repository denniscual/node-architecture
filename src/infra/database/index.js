import { userRepository } from './users'

const database = () => {
  return {
    userRepository,
    start: () => console.log('Running our database.')
  }
}

export default database
