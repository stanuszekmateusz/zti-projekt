const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Twój email jest błędny'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Wprowadź poprawnie hasło:
              <br>
              1. moze zawierać jedynie małe i duze litery oraz liczby.
              <br>
              2. 8-32 znaków
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
