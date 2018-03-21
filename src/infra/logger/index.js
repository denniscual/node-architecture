const fs = require('fs')
const winston = require('winston')

// check if the logs dir is already exist
if (!fs.existsSync(`logs`)) {
  fs.mkdirSync(`logs`)
}

module.exports = ({ config }) =>
  new winston.Logger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File(Object.assign(
        config.logging, {
          filename: `logs/${config.env}.log`
        }))
    ]
  })
