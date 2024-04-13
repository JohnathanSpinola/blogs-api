module.exports = (error, _req, res, _next) => {
  console.log('ErrorDoMiddleware', { error });
  const { status, message } = error;
  return res.status(status).json({ message });
};