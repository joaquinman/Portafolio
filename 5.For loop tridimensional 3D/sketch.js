var angle = 4;
  var r = 12;

var spin = 0.3;
var grow = spin * 4;

function setup() {
  createCanvas(400, 500);
  background(40,500,180);
}

function draw() {
  angle += spin;
  r = r + grow;
  //r = noise(angle) * 100;
  // Polar to Cartesian Transformation
  var x = cos(angle)*r;
  var y = sin(angle)*r;
  translate(40, 200);
  randomColor = color(random(255),random(255), random(255));
  //line(0, 10, x, y);
  triangle(x, y, 58, 20, 86, 75);




}