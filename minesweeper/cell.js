function Cell(x, y){
  this.value = 0;
  this.w = w/diff;
  this.posx = x;
  this.posy = y;
  this.x = y*this.w;
  this.y = x* this.w;
  this.vu = false;
  this.win = false;
  this.life = true;
  this.b = false;
  this.explosed = false;

  this.show = function(){
    fill(200);
    noStroke();
    rect(this.x+3, this.y+3, this.w-6, this.w-6);
    if(this.b){
        fill("green");
        rect(this.x, this.y, this.w, this.w);
    }else{
      if (this.value == -1){
        fill(51);
        noStroke();
        if(this.explosed){
          fill("red");
        }
        if(this.win){
          fill("green");
        }
        ellipse(this.x + (this.w/2), this.y + (this.w/2), this.w/2, this.w/2);
        fill(200);
      }else if (this.value > 0) {
        textSize(40);
        fill('green');
        text(this.value, this.x + (this.w/2) - 10, this.y + this.w/2 + 18);
      }
    }
  }

  this.hover = function (){
    state = true;
    if (mouseX < g.x){
      state = false;
    }
    if (mouseX > g.x+w){
      state = false;
    }
    if (mouseY < g.y){
      state = false;
    }
    if (mouseY > g.y+w){
      state = false;
    }
    if(state){

      posx = mouseY - g.y;
      posy = mouseX - g.x;
      posx = floor(map(posx, 0, w, 0, diff));
      posy = floor(map(posy, 0, w, 0, diff));
      if(this.posx == posx && this.posy == posy){
        stroke("green");
        strokeWeight(4);
        noFill();
        rect(this.x, this.y, this.w, this.w);
      }else{
        state = false;
      }

    }
    return state;

  }

  this.block = function(){
    this.b = !this.b;
  }

  this.flip = function(){
    if (this.life && !this.b){
      this.vu = true;
    }
  }

  this.setValue = function(v){
    this.value = v;
  }
}
