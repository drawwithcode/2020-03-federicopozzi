let do1;
let re1;
let mi1;
let fa1;
let sol1;
let la1;
let si1;
let d;
let v;
let w_tasto;
let h_tasto;
let tasti = [];
let note = [];

function preload() {
  note.push(loadSound("assets/do.mp3"));
  note.push(loadSound("assets/re.mp3"));
  note.push(loadSound("assets/mi.mp3"));
  note.push(loadSound("assets/fa.mp3"));
  note.push(loadSound("assets/sol.mp3"));
  note.push(loadSound("assets/la.mp3"));
  note.push(loadSound("assets/si.mp3"));



  img = loadImage("assets/mozzi.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  w_tasto = width / 7;
  h_tasto = height - 400;

  //title
  push();
  var myText = "Wanna be like Mozart?";
  textFont("Titillium Web");
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text(myText, windowWidth / 2, 65);
  pop();


  for (let a = 0; a < 7; a++) {
    tasti.push(new Tasto(a))
  }

}

function draw() {
  // if (mouseX < width / 7) {
  //
  //   if (mi1.isPlaying() == false) {
  //     mi1.play();
  //     re1.stop();
  //   }
  // } else if (mouseX < width / 6 && mouseX > width / 7) {
  //   if (re1.isPlaying() == false) {
  //     re1.play();
  //     mi1.stop();
  //   }
  //
  // }
  //

  for (let i = 0; i < tasti.length; i++) {
    let t = tasti[i];
    t.run();
  }

  push();
  imageMode(CENTER);
  image(img, width / 2, 200, 200, 200);
  pop();

}

class Tasto {
  constructor(index) {
    this.nota = index;
    this.suono = note[index];
  }

  run() {
    rect(this.nota * w_tasto, 400, w_tasto, h_tasto);
  }

  suona() {
    this.suono.play();
  }
}

function mousePressed() {
  if (mouseY > 400) {
    let i = floor(mouseX / w_tasto);
    let tasto = tasti[i];
    tasto.suona();
  }


}
