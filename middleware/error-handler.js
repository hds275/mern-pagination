const ResponseError = require('../common/response-error')
const { sendError } = require('../common/response')

module.exports = (error, req, res, next) => {
  if (error.constructor !== ResponseError.constructor) sendError(res)
  sendError(res, error)
}
