function createBalloons() {
  new Balloon(20, 50, 100, [255, 0, 255, 50]);
  new Balloon("Hi");
  new Balloon("Fat");
  console.log(Balloon.instances)
}

createBalloons();
