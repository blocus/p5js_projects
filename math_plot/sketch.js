function f(x){
  return x;
}



let g;
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  g = new Grid();
  c = new Curve();
  c.init();
  c1 = new Curve();
  c1.setRange(-1, 1, 1);
  c1.setFunc(f);
  c.setFunc(sin);
  background(256);
  g.show();
}

function draw(){
  c.show();
  c.showShadow();
  c1.show();
  c1.showShadow();
  noLoop();
}
