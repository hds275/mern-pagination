main()
async function main() {
  require('dotenv').config()

  const express = require('express')
  const app = express()

  await require('./db').connect()

  app.use('/api/v1', require('./routes'))

  // error handler middleware must be at the end
  app.use(require('./middleware/error-handler'))

  const PORT = +process.env.PORT || 8080
  app.listen(PORT, () =>
    console.log(`Server is running successfully on port ${PORT}`)
  )

  process.on('SIGINT', () => {
    console.log('Bye bye!')
    process.exit()
  })
}
