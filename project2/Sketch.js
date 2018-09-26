function setup() {

}
function setup() {
    createCanvas(640, 480);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(random(250), random(250), random(200));
    }
     var size = random(20);
    ellipse(mouseX, mouseY, size, size);
    noStroke();

}

