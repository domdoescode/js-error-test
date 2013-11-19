module.exports = function () {
  function myFunction() {
    secondFunction()
  }

  function secondFunction() {
    throw new Error('Where am I?')
  }

  return {
    myFunction: myFunction
  }
}