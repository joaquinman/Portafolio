let angle = 100;
  let r = 10;
let spin = 0.2;
let grow = spin * 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  blendMode(DIFFERENCE);
  noCursor();
}

function draw() {
  
  let x = cos(angle)*r;
  let y = sin(angle)*r;
  
  r = r + grow; 
  angle += spin;
  
  translate(width / 4, height / 2);
  randomColor = color(random(25),random(255), random(255));
  fill(randomColor)
  noStroke();
  rect(x, y, 30, 40);
  
}