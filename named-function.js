module.exports = function one() {
  function myFunction() {
    throw new Error('Where am I?')
  }

  return {
    myFunction: myFunction
  }
}