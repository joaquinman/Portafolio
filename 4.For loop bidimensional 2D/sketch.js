let max_distance;

function setup() {
  createCanvas(600,600);
  noStroke();
  max_distance = dist(4, 7, width,height);
}

function draw() {
  background(22,20,500);

  for (let i = 2; i <= width; i += 30){
    for (let j = 0; j <= height; j += 15) {    
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 300;
      rect(i, j, size, size);
      fill(0);
    }
  }
}
