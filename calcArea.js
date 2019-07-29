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

var toExport = {
    Circle: productCircle,
    Triangle : productTriangle,
    Rectangle: productRectangle,
}

module.exports = toExport
