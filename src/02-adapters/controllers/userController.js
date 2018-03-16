// Controller is an adapter.
const userDomain = require('../../01-domain/users')

const successfulResponse = (res) => (doc) => {
  res.send(doc)
}

const errorResponse = (res) => (err) => {
  res.status(400).send(err)
}

// factory function
// TODO: Research about the relationship between external element and services.
// Read about service-oriented architecture
// Also read about DDD
const userService = (payload) => ({
  addUser (payload) {
  }
})

// controller, our webserver adapter
exports.createUser = (req, res, next) => {
  const { user } = req.body
  // we are injecting the dependencies to our user domain.
  // using dependency injection, we prevent the creation of static dependency to our domain.
  userDomain
    .createUser({
      user,
      isValidUser: userService.isValidUser,
      addUser: userService.addUser,
      successfulResponse,
      errorResponse
    })
}
