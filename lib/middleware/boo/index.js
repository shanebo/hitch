function boo() {
  return (req, res, next) => {
    console.log('boo');
    next();
  }
}


module.exports = boo;
