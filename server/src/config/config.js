module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'zti-projekt',
    user: process.env.DB_USER || 'zti-projekt',
    password: process.env.DB_PASS || 'zti-projekt',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DIALECT || 'localhost',
      storage: './zti-projekt.sqlite'
    }
  }
}
