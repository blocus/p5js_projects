let g;
let p;
let points;
let w;
function setup(){
  p = new Perceptron();
  points = new Array(10000);
  //w = min(, );
  createCanvas(window.innerWidth, window.innerHeight);
  background(128);
  g = new Grid();
}

function draw(){
  for(i = 0; i < 10000; i++){
    points[i] = new Point();
  }
  p.train(points);
//  background(128);
  for(i = 0; i < 10000; i++){
    points[i].show();
  }
  stroke(0);
  line(0, 0, width, height);
  g.show();
}
