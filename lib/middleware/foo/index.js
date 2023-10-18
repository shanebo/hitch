function foo() {
  return (req, res, next) => {
    console.log('foo');
    next();
  }
}


module.exports = foo;
