function Point(){
  this.inputs = [random() * width, random() * height];
  this.label = -1;
  this.correct = false;
  this.ratio = width / height
  if (this.inputs[0] < this.ratio* this.inputs[1]){
    this.label = 1;
  }


  this.show = function(){
    if (this.correct){
      fill("green");
    }else {
      fill("red");
    }
    noStroke();
    rect(this.inputs[0], this.inputs[1], 1, 1);
  }
  //return this;
  //console.log(this.x, this.y);
}
