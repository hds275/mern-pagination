const mongoose = require('mongoose')

exports.connect = async () => {
  try {
    const mongoose = require('mongoose')
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true,
    })

    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error(error)
  }
}
