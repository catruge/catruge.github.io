const backgroundColour = 230;
const balloonColours = [[255, 200, 150, 150], [150, 200, 255, 150], [200, 230, 150, 200]];
var canvas;
var width;
var height;
var balloonSize = 100;
var originalVel = 13;
var balloonVel = originalVel;
var gravity = 0.2;
var bounceOffset = 50;
var balloonY = bounceOffset;

window.onresize = fixCanvasSize;

function fixCanvasSize() {
  if (canvas != null) {
    width = $(window).width();
    height = $(window).height();
    resizeCanvas(width, height);
  }
}

function setup() {
  canvas = createCanvas($(window).width(), $(window).height());
  background(backgroundColour);
  noStroke();
}

function draw() {
  translate(width / 2, height + balloonSize / 2);
  if (balloonY >= bounceOffset) {
    balloonY = bounceOffset;
    balloonVel = originalVel;
    fill(random(balloonColours));
  }
  background(backgroundColour);
  ellipse(0, balloonY, balloonSize, balloonSize);
  balloonVel -= gravity;
  balloonY -= balloonVel;
}
