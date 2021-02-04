require('dotenv').config({ path: './.env' })
const connect = require('../db').connect
const Post = require('../models/post')

const addData = async () => {
  await connect()
  const fakePosts = require('./create-fake-posts')(200)
  try {
    await Post.create(fakePosts)
    console.log('Data successfully added')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const removeData = async () => {
  await connect()
  try {
    await Post.deleteMany({})
    console.log('Data successfully deleted')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const flag = process.argv[2]
if (flag === '--add') addData()
if (flag === '--delete') removeData()
