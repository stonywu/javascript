function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
}
function draw(){
 fill(random(256),random(256),random(256));
  rect(random(width),random(height),50);
  
}
