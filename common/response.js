exports.sendError = (res, error = {}) =>
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' })

exports.sendSuccess = (res, data, statusCode = 200) =>
  res.status(statusCode).json({
    success: true,
    data,
  })
