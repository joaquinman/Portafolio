let bg, mancha1, mancha2, mancha3;

function preload() {
  bg = loadImage('CIRCO.jpg');
}

function setup() {
 cursor;
  createCanvas(600, 600);
  background(bg);

  mancha1 = loadImage('CACA1.png');
  mancha2 = loadImage('CACA2.png');
  mancha3 = loadImage('CACA3.png');
 
}

function draw() {}

function stamp(x, y) {

  push();
  imageMode (CENTER);
  image(mancha, x, y, 100, 100);
  pop();
}

function mousePressed() {
  manchas = [mancha1, mancha2, mancha3];
  mancha = random(manchas);
  
  stamp(mouseX, mouseY);

}