module.exports = function () {
  function myFunction() {
    throw new Error('Where am I?')
  }

  return {
    myFunction: myFunction
  }
}