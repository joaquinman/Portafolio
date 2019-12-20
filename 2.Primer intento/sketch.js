function setup() {
  createCanvas(600,700, WEBGL);
}

function draw() {
  background(13);
  rotateX(frameCount * 0.08);
  rotateZ(frameCount * 0.1)
  fill(90, 44, 300)
  ellipsoid(30, 300, 500);
}