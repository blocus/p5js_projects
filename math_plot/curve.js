function Grid(){
  this.x = width /2;
  this.y = height/2;
  this.ux = 50;
  this.uy = 50;
  this.ex = (width / this.ux)/2;
  this.sx = - this.ex;
  this.ey = (height / this.uy)/2;
  this.sy = - this.ey;
}

Grid.prototype.px = 1/Grid.ux;
Grid.prototype.py = 1/Grid.uy;

function Curve(){
  this.x = [];
  this.y = [];
}

Curve.prototype.init = function(){
  index = 0;
  for(let i = g.sx; i < g.ex; i += g.px){
    this.x[index] = i;
    index++;
  }
}

Grid.prototype.show = function(){
  stroke(0);
  strokeWeight(1);
  line(this.x, 0, this.x, height);
  line(0, this.y, width, this.y);
  textFont("sans-serif");
  textSize(12);
  fill(0);
  noStroke();
  index = 0;
  for(let i = this.x; i < width; i += this.ux){
    strokeWeight(1);
    stroke(0, 50);
    line(i, 0, i, height);
    fill(0);
    noStroke();
    text(index.toString(), i, this.y);
    index ++;
  }
  index = 0;
  for(let i = this.x; i > 0; i -= this.ux){
    strokeWeight(1);
    stroke(0, 50);
    line(i, 0, i, height);
    fill(0);
    noStroke();
    text(index.toString(), i, this.y);
    index --;

  }
  index = 0;
  for(let j = this.y; j < height; j += this.uy){
    strokeWeight(1);
    stroke(0, 50);
    line(0, j, width, j);
    fill(0);
    noStroke();
    text(index.toString(), this.x, j);
    index --;

  }
  index = 0;
  for(let j = this.y; j > 0; j -= this.uy){
    strokeWeight(1);
    stroke(0, 50);
    line(0, j, width, j);
    fill(0);
    noStroke();
    text(index.toString(), this.x, j);
    index ++;

  }
}

Curve.prototype.setRange = function(s, e, p){
  index = 0;
  for(let i = s; i < e; i += p){
    this.x[index] = i;
    index++;
  }
  this.x[index] = e;
}

Curve.prototype.setFunc = function(f){
  for(let i = 0; i < this.x.length; i++){
    this.y[i] = f(this.x[i]);
  }
}

Curve.prototype.show = function(){
  fill(0);
  stroke(0);
  strokeWeight(2);
  px = g.ux;
  py = g.uy;
  tx = g.x;
  ty = g.y;
  for(let i = 0; i < this.x.length-1; i++){
    x = this.x[i] * px + tx;
    y = - this.y[i] * py + ty;
    x1 = this.x[i+1] * px + tx;
    y1 = - this.y[i+1] * py + ty;
    if(x > width || x < 0){
      continue;
    }
    if(y > height || y < 0){
      continue;
    }
    line(x, y, x1, y1);
  }
}

Curve.prototype.showShadow = function(){
  px = g.ux;
  py = g.uy;
  tx = g.x;
  ty = g.y;
  for(let i = 0; i < this.x.length-1; i++){
    x = this.x[i] * px + tx;
    y = - this.y[i] * py + ty;
    if(x > width || x < 0){
      continue;
    }
    if(y > height || y < 0){
      continue;
    }
    stroke(0, 50);
    console.log(this.x[i]);
    line(x, ty, x, y);
  }
}
