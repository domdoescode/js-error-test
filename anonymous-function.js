module.exports = function () {
  var myFunction = function () {
    throw new Error('Where am I?')
  }

  return {
    myFunction: myFunction
  }
}