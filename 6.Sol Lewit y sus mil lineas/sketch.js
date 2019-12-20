let m = 0;
function setup() {
  createCanvas(600, 500);
  strokeWeight (.2);
  stroke(10,100);
  noLoop ();
}

function draw() {
  
  background(300);

  for(i = 0; i < 1000; i++) {
    
    push();
    let X = random (m, width -m);
    let Y = random (m, height- m);
     
    translate (X,Y);
    rotate (random (TWO_PI));
    line (-300,0,20,0);
    pop();
  }
}