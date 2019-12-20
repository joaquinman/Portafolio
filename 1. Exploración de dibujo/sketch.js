function setup() {
  createCanvas(600, 600);
  background(135, 259, 300);
  noCursor();
}
function draw() {
  if (mouseIsPressed) {
    fill(480, 400, 0);

  } else {
fill('#fae');
 }
  ellipse(mouseX, mouseY, 40, 76, 30, 60);
}
