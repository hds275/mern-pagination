const postsRouter = require('./posts')
const express = require('express')

const router = express.Router()

router.use('posts', postsRouter)

module.exports = router
