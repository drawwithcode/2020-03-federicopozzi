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
let tastiera = ["a", "s", "d", "f", "g", "h", "j"];
let codici = [65, 83, 68, 70, 71, 72, 74];

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



  for (let a = 0; a < 7; a++) {
    tasti.push(new Tasto(a))
  }

}

function draw() {

  push();
  var myText = "Wanna be like Mozart?";
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text(myText, windowWidth / 2, height*0.1);
  pop();

  for (let i = 0; i < tasti.length; i++) {
    let t = tasti[i];
    t.run();
  }

  var rotazione;

  translate(width / 2, height / 4);
  rotate(radians(rotazione));

  var ruotami = 0;
  ruotami = ruotami + 0.5;


  push();
  rotate(ruotami * (frameCount / 80));
  translate(-100, -100);
  image(img, 0, 0, 200, 200);
  pop();

}

class Tasto {
  constructor(index) {
    this.nota = index;
    this.suono = note[index];
    this.text = tastiera[index];
    this.codice = codici[index];
  }

  run() {
    push();
    translate(this.nota * w_tasto, 400);
    if (this.nota % 2) {
      this.isPressed()?fill("black"):fill("peachpuff");
    } else {
        this.isPressed()?fill("black"):fill("olive");
    }


    noStroke();
    rect(0, 0, w_tasto, h_tasto);
    textSize(20);
    fill(0);
    text(this.text.toUpperCase(), w_tasto / 2, h_tasto / 2);
    pop();
  }

  suona() {
    this.suono.play();
  }

  isPressed() {
    return keyIsDown(this.codice);
  }
}

function mousePressed() {
  if (mouseY > 400) {
    let i = floor(mouseX / w_tasto);
    let tasto = tasti[i];
    tasto.suona();
  }
}

function keyPressed() {
  console.log(key, keyCode);
  tasti.forEach(function(tasto, index) {
    if (tasto.isPressed()) {
      tasto.suona();
    }
  })

  // for (let i = 0; i < tastiera.length; i++){
  //   let tasto = tastiera[i];
  //   if (key == tasto){
  //     tasti[i].suona();
  //   }
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w_tasto = width / 7;
  h_tasto = height - 400;
}
