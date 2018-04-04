import User from './users'

const database = () => {
  return {
    User,
    start: () => console.log('Running our database.')
  }
}

export default database
