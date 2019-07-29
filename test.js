var findArea = function (x,y){
    var total = x+y
    return total
   }
   
   var testBoolean = false
   var testArray = ['steam','GOG','epic']
   var testString = 'string'
   var testNumber = 3.14
   
   var toExport = {
       testFunction: findArea,
       testBoolean: testBoolean,
       testArray : testArray,
       testString : testString,
       testNumber : testNumber,
   }
   
   
// console.log(toExport)
   module.exports = toExport