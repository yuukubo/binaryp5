// binaryp5

let [canvas_X, canvas_Y] = [640, 640];

function setup() {
  createCanvas(canvas_X, canvas_Y);
}

function draw() {
  push();
  noStroke();
  fill(200, 10, 10);
  rect(10, 10, 50, 50);
  pop();
}
