const ResponseError = require('../common/response-error')
const { sendSuccess, sendError } = require('../common/response')
const Post = require('../models/post')

exports.getPosts = async (req, res) => {
  try {
    let query = Post.find()

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const skip = (page - 1) * limit
    const total = await Post.countDocuments()
    const pages = Math.ceil(total / limit)

    query = query.skip(skip).limit(limit)

    if (page > pages) {
      throw new ResponseError('Page not found', 404)
    }

    const posts = await query

    const data = {
      pages,
      page,
      count: posts.length,
      posts,
    }

    sendSuccess(res, data)
  } catch (error) {
    sendError(res, error)
  }
}
