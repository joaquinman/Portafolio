function setup() {
  createCanvas(600,400, WEBGL);
}

function draw() {
  background(1);
  rotateX(frameCount * 0.05);
  rotateZ(frameCount * 0.1)
  fill(90, 440, 300)
  square(30, 20, 55);
}