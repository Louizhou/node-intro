var productCircle = function(x,y){

    var productCircle = x*x*3.14
    return productCircle
}

var productTriangle = function(x,y){
    var productTriangle = x*y/2
    return productTriangle
}

var productRectangle = function(x,y){
    var productRectangle = x*y
    return productRectangle
}

var productCube= function(x,y,z){
    var productCube = x*y*z
    return productCube
}



var toExport = {
Cube: productCube,
Circle: productCircle,
Triangle : productTriangle,
Rectangle: productRectangle,

}

module.exports = toExport