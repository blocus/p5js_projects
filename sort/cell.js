

function cell(v, c, w){
  this.v = v;
  this.c = c;
  this.w = w;
}

//cell.show = function(){
cell.prototype.show = function(p){
  noStroke();
  //console.log(p, this.v);
  fill(color(this.c));
  rect(this.w * p, 0, this.w, height);


}
