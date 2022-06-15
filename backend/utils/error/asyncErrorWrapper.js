const wrapperError = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log("err", err.statusCode);
    // res.statusMessage = err.message;
    // res.status(err.statusCode).send();
    // console.log('11111',res.statusMessage);
    res.statusMessage = err.message || 'Something went wrong';
    res.status(err.statusCode || 500).send();
    next(err);
  });
};
module.exports = wrapperError;
