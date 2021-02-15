var document = app.activeDocument;
var layer = document.layers[0];
var pathItems = layer.pathItems;
var pathItem = pathItems[0];
var points = pathItem.pathPoints;

// read points
for(var i = 0; i < points.length; i++) {
$.writeln(points[i].anchor);
}

var myColour = new CMYKColor();
myColour.cyan = 64;
myColour.magenta = 0;
myColour.yellow = 60;
myColour.black = 14;


// create new layer and assign some vertices/colour
var newLayer = document.layers.add();
newLayer.name = "My new layer";

var newPathItem = newLayer.pathItems.add();
newPathItem.filled = true;
newPathItem.fillColor = myColour;
var pathPoints = [];
var pathPoint;

var vertices = [[88, -751], [101, -633], [412, -577], [552, -618]];

// lets add points
for(var i = 0; i < vertices.length; i++) {
    pathPoint = newPathItem.pathPoints.add();
    pathPoint.anchor = vertices[i];
    pathPoints.push(pathPoint);
    }
newPathItem.pathPoints = pathPoints;