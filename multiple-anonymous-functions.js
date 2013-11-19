module.exports = function () {
  var myFunction = function () {
    secondFunction()
  }

  var secondFunction = function () {
    throw new Error('Where am I?')
  }

  return {
    myFunction: myFunction
  }
}