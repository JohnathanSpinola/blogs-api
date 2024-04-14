module.exports = (error, _req, res, _next) => {
  console.log('ErrorDoMiddleware', { error });
  // const { status, message } = error;
  const status = error.status || 500;
  const message = error.status ? error.message : 'Internal Server Error';
  return res.status(status).json({ message });
};