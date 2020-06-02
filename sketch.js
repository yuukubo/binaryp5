// binaryp5

let [canvas_W, canvas_H] = [1000, 500];
let is_bit_on = [];
let button_X = [];
let button_Y = [];
let button_W = 80;
let button_H = 80;
let button_text_size = 20;
let button_text = ["0", "1"];
let button_label = ["1", "2", "4", "8", "16", "32", "64", "128"];
let on_RGB = [10, 200, 100];
let off_RGB = [250, 60, 60];

function setup() {
  createCanvas(canvas_W, canvas_H);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 8; i++) {
    is_bit_on[i] = 0;
    button_X[i] = canvas_W * ( 8 - i ) / 10;
    button_Y[i] = canvas_H * 2 / 10;
  }
}

function draw() {
  background(50, 50 ,50);
  for (let i = 0; i < 8; i++) {
    if (is_bit_on[i]) {
      set_button(on_RGB[0], on_RGB[1], on_RGB[2], button_X[i], button_Y[i], button_W, button_H);
      set_label(button_X[i], button_Y[i], button_label[i], button_text[1]);
    } else {
      set_button(off_RGB[0], off_RGB[1], off_RGB[2], button_X[i], button_Y[i], button_W, button_H);
      set_label(button_X[i], button_Y[i], button_label[i], button_text[0]);
    }
  }
  set_pointer();
}

function set_pointer() {
  push();
  noStroke();
  fill(255, 255, 0)
  circle(mouseX, mouseY, 4);
  pop();
}

function mouseClicked() {
  for (let i = 0; i < 8; i++){
    if ((button_X[i] - button_W / 2 < mouseX && mouseX < button_X[i] + button_W / 2) && (button_Y[i] - button_H / 2 < mouseY && mouseY < button_Y[i] + button_H / 2)) {
      if (is_bit_on[i]) {
        is_bit_on[i] = 0;
      } else {
        is_bit_on[i] = 1;
      }
      break;
    }
  }
}

function set_button(button_R, button_G, button_B, button_X, button_Y, button_W, button_H) {
  push();
  noStroke();
  rectMode(CENTER);
  fill(button_R, button_G, button_B);
  rect(button_X, button_Y, button_W, button_H);
  pop();
}

function set_label(button_X, button_Y, button_label, button_text) {
  push();
  textSize(button_text_size);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(button_label + " : " + button_text, button_X, button_Y);
  pop();
}
