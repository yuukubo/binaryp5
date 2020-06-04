// binaryp5

let game_title = "* binaryp5 * c8.2"
let [canvas_W, canvas_H] = [940, 460];
let is_bit_on = [];
let button_X = [];
let button_Y = [];
let button_W = 40;
let button_H = 60;
let button_text_size = 25;
let button_text = ["0", "1"];
let button_label = ["1", "2", "4", "8", "16", "32", "64", "128"];
let on_RGB = [10, 200, 100];
let off_RGB = [250, 90, 90];
let decimal_num = 0;
let is_touch = 0;
let score_frame_X = 890; // (canvas_W - score_frame_W) / 2 + (score_frame_W / 2)
let score_frame_Y = canvas_H / 2;
let score_frame_W = 200;
let score_frame_H = canvas_H - 40;
let game_frame_X = [canvas_W / 2, canvas_W - 12, canvas_W / 2, "12", (canvas_W - score_frame_W) - 12];
let game_frame_Y = ["20", canvas_H / 2, canvas_H - 20, canvas_H / 2, canvas_H / 2];
let game_frame_W = ["920", "4", "920", "4", "4"];
let game_frame_H = ["30", canvas_H - 20, "30", canvas_H - 20, canvas_H - 20];

function setup() {
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove",  function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(canvas_W, canvas_H);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 8; i++) {
    is_bit_on[i] = 0;
    button_X[i] = (canvas_W - 100) * ( 8 - i ) / 10;
    button_Y[i] = canvas_H * 3 / 10;
  }
}
 
function draw() {
  decimal_num = 0;
  background(50, 50 ,50);
  for (let i = 0; i < 5; i++) {
    set_game_frame(game_frame_X[i], game_frame_Y[i], game_frame_W[i], game_frame_H[i]);
    if (i == 0) {
      set_frame_label(game_frame_Y[i]);
    }
    if (i == 2) {
      set_frame_label(game_frame_Y[i]);
    }
  }
  set_game_title();
  for (let i = 0; i < 8; i++) {
    if (is_bit_on[i]) {
      set_button(on_RGB[0], on_RGB[1], on_RGB[2], button_X[i], button_Y[i], button_W, button_H);
      set_label(button_X[i], button_Y[i], button_label[i], button_text[1]);
      decimal_num = decimal_num + (2 ** i);
    } else {
      set_button(off_RGB[0], off_RGB[1], off_RGB[2], button_X[i], button_Y[i], button_W, button_H);
      set_label(button_X[i], button_Y[i], button_label[i], button_text[0]);
    }
    if (i == 7) {
      set_decimal_num(button_Y[i]);
    }
  }
  if (1 == is_touch) {
    touched();
    is_touch = 0;
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

function touchStarted() {
  is_touch = 1;
}
function touched() {
  mousePressed();
  is_touch = 0;
}
function touchEnded() {
  is_touch = 0;
}
function mousePressed() {
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
  rect(button_X, button_Y, button_W, button_H, 10);
  pop();
}

function set_label(button_X, button_Y, button_label, button_text) {
  push();
  textSize(button_text_size);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
//  text(button_label + " : " + button_text, button_X, button_Y);
  text(button_text, button_X, button_Y);
  pop();
}

function set_decimal_num(button_Y) {
  push();
  textSize(button_text_size);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(200);
  text(" = ", canvas_W * 18 / 20, button_Y);
  text(decimal_num, canvas_W * 19 / 20, button_Y);
  pop();
}

function set_game_title() {
  push();
  textSize(10);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(game_title, canvas_W * 9 / 10, canvas_H -20);
  pop();
}

function set_game_frame(game_frame_X, game_frame_Y, game_frame_W, game_frame_H) {
  push();
  noStroke();
  fill(240);
  rect(game_frame_X, game_frame_Y, game_frame_W, game_frame_H);
  pop();
}

function set_frame_label(game_frame_Y) {
  push();
  textSize(20);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  fill(10);
  for (let i = 0; i < 8; i++) {
    text(button_label[i], button_X[i], game_frame_Y);
  }
  pop();
}
