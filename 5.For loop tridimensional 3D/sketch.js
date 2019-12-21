function setup() {
  createCanvas(500, 600,WEBGL);
}

function draw() {
  background(1);
  
for (var x = 3; x < width;x += 600){
  for (var y = 0; y < height;y += 300){
  rotateX(frameCount*0.005);
  rotateY(frameCount*0.04);
  box(x-100);
    let c= color(50,360,80)
     fill (c)
if(mouseIsPressed){
  sphere(20);
  
  }
  }
}
}