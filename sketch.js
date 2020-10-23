let do1;
let re1;
let mi1;
let fa1;
let sol1;
let la1;
let si1

function preload(){
  do1 = loadSound("assets/do.mp3");
  re1 = loadSound("assets/re.mp3");
  mi1 = loadSound("assets/mi.mp3");
  fa1 = loadSound("assets/fa.mp3");
  sol1 = loadSound("assets/sol.mp3");
  la1 = loadSound("assets/la.mp3");
  si1 = loadSound("assets/si.mp3");


}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  if (mouseIsPressed) {
    background(0,255,0);
    if (do1.isPlaying() == false) {
      do1.play();
    }
  } else {
    background(255,0,0);
    do1.stop();

  }
}
