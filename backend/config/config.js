require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "@Star67",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "@Star67",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "postgres",
    "password": "@Star67",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
