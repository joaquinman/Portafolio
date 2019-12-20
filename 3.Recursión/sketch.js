function setup() {
  createCanvas(600, 600);
  fill(345, 90 ,66);
  strokeWeight(.25);
}

function draw() {
  background(220, 89, 589);
  let niveles = round(map(mouseX, 0, width, 0, 10));
  recursiveCircle(width/2, height/3, 500, niveles);
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, diam);
  if(levels > 1){
    recursiveCircle(x-diam/300, y, diam/2, levels-1);
    recursiveCircle(x+diam/300, y, diam/2, levels-1);
    
stroke(255, 102, 0);
line(500, 200, 300, 400);
line(300, 300, 150, 800);
stroke(20, 20, 20);
bezier(85, 20, 10, 10, 90, 90, 15, 80);
    
  }
}