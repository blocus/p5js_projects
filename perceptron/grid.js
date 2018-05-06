function Grid(){
  this.x = width /2;
  this.y = height/2;
  this.ux = 50;
  this.uy = 50;



  this.show = function(){
    stroke(51);
    strokeWeight(2);
    line(this.x, 0, this.x, height);
    line(0, this.y, width, this.y);
    strokeWeight(1);
    for(let i = this.x; i < width; i += this.ux){
      line(i, 0, i, height);
    }
    for(let i = this.x; i > 0; i -= this.ux){
      line(i, 0, i, height);
    }
    for(let j = this.y; j < height; j += this.uy){
      line(0, j, width, j);
    }
    for(let j = this.y; j > 0; j -= this.uy){
      line(0, j, width, j);
    }
  }



}
