let do1;
let re1;
let mi1;
let fa1;
let sol1;
let la1;
let si1;
let d;
let v;

function preload(){
  do1 = loadSound("assets/do.mp3");
  re1 = loadSound("assets/re.mp3");
  mi1 = loadSound("assets/mi.mp3");
  fa1 = loadSound("assets/fa.mp3");
  sol1 = loadSound("assets/sol.mp3");
  la1 = loadSound("assets/la.mp3");
  si1 = loadSound("assets/si.mp3");

  img = loadImage("assets/mozzi.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //title
   push();
   var myText = "Wanna be like Mozart?";
   textFont("Titillium Web");
   textAlign(CENTER);
   textSize(50);
   fill(0);
   text(myText, windowWidth / 2, 65);
   pop();


  for(let a = 0; a < 7; a++) {
for (let x =0; x <width; x+=width/7){
  stroke(255);
	fill(255, 0, 0);
	v = rect(x, 350, width/7,height);
}


  }



}
function draw() {
  if (mouseX<width/7) {

    if (mi1.isPlaying() == false) {
      mi1.play();
      re1.stop();
    }
  } else if (mouseX<width/6 && mouseX>width/7){
    if (re1.isPlaying() == false) {
      re1.play();
      mi1.stop();
    }

  }

  push();
  imageMode(CENTER);

  image(img, width/2, 200, 200,200);

  pop();

}
