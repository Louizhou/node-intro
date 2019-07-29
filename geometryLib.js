
var area = require('./calcArea')
var volume = require('./calcVolume')

console.log(area)
console.log(volume)

var toExport = {
   rectangle : area.Rectangle,
   circle : area.Circle,
   triangle : area.Triangle,
   cube : volume.cube
}

module.exports = toExport