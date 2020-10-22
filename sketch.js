//variables
var mySong;
var img;
var analyzer;

myColor = ['peachpuff', 'olive', 'blue']

function preload() {
  //load image and sound
  mySong = loadSound(' ./assets/sia_unstoppable_instrumental_7446236540751987590.mp3');
  img = loadImage("assets/marina.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  angleMode(DEGREES);

  //song analyzer
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {

  //backgroundimage
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  img.filter("gray")
  pop();

  //title
  push();
  var myText = "Music: Slingshot by Gyom";
  textFont("Titillium Web");
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text(myText, windowWidth / 2, 65);
  pop();

  //text of explanation
  push();
  var mySecondText = "Move the mouse to the right to play the song and move it to the bottom to change rate and volume of the song_";
  textFont("Titillium Web");
  textAlign(CENTER);
  textSize(15);
  fill('white');
  noStroke();
  text(mySecondText, windowWidth / 2, 100);
  pop();


  //song attribute
  var volume = 0;

  if (mouseX > width / 2) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    mySong.stop();
  }

  if (mouseY > height / 2) {
    mySong.rate(3);
    mySong.amp(-2);
  } else {
    mySong.rate(1);
    mySong.amp(1);
  }

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height); //we use height to make it as big as possible

  stroke(random(myColor));
  fill('peahpuff');

  if (frameCount < 600) {
    for (var x = 0; x < windowWidth; x += 30) {

      //rectangles on the bottom
      push();
      strokeWeight(1);
      rect(x, height, 2, -volume + 30);
      pop();
    }
  } else {
    rect(x, height, 2, 0);

    //circles on the bottom angles
    //first circle
    noFill();
    ellipse(0, windowHeight, 10 + volume, 10 + volume);
    ellipse(0, windowHeight, 30 + volume, 30 + volume)
    ellipse(0, windowHeight, 50 + volume, 50 + volume)

    //second circle
    push();
    translate(windowWidth, windowHeight);
    ellipse(0, 0, 10 + volume, 10 + volume);
    ellipse(0, 0, 30 + volume, 30 + volume);
    ellipse(0, 0, 50 + volume, 50 + volume);
    pop();
  }

  //rotated squares on the center of the page
  rectMode(CENTER);
  noFill();
  strokeWeight(2);

  //square number 1
  push();
  translate(windowWidth / 2, windowHeight / 3);
  rotate(45);
  rect(0, 0, volume + 20, volume + 20);
  pop();

  //square number 2
  push();
  translate(windowWidth / 2, windowHeight * 2 / 3);
  rotate(45);
  rect(0, 0, volume + 20, volume + 20);
  pop();

}
