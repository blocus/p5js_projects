function make2DArray(r, c){
  let arr = new Array(r);
  for (let i = 0; i < r; i++){
    arr[i] = new Array(c);
    for (let j = 0; j < c; j++){
      arr[i][j] = new Cell(i, j);
    }
  }
  return arr;
}

function get_voi(g, x, y){
  let sum = 0;
  for (let i = x-1; i < x+2; i++){
    if ((i < 0)|| (i > g.length - 1)){
      continue;
    }
    for (let j = y-1; j < y+2; j++){
      if ((j < 0)|| (j > g[i].length - 1)){
        continue;
      }
      if ((i == x) && (j == y)){
        continue;
      }
      if (g[i][j].value == -1){
        sum += 1;
      }
    }
  }
  return sum;
}


function Grid(){
  this.x = width/2 - w/2;
  this.y = height/2 - w/2;
  this.w = w;
  this.vu = true;
  this.diff = diff;
  this.notmine = diff*diff;
  this.life = true;
  this.win = false;
  this.cells = make2DArray(diff, diff);

  for(let i = 0; i < this.diff; i++){
    for(let j = 0; j < this.diff; j++){
      if(random() < 1/this.diff){
        this.cells[i][j].setValue(-1);
        this.notmine --;
      }
    }
  }

  for(let i = 0; i < this.diff; i++){
    for(let j = 0; j < this.diff; j++){
      if(this.cells[i][j].value == 0){
        v = get_voi(this.cells, i, j);
        this.cells[i][j].setValue(v);
      }
    }
  }


  this.write = function(){
    for(let i = 0; i < this.diff; i++){
      ch = "";
      for(let j = 0; j < this.diff; j++){
        ch += this.cells[i][j].value.toString()+ " ";
      }
      console.log(ch);
    }
  }

  this.show = function(){
    noStroke();
    fill(200);
    //rect(this.x, this.y, w, w);
    translate(this.x, this.y);
    for(let i = 0; i < this.diff; i++){
      for(let j = 0; j < this.diff; j++){
        this.cells[i][j].life = this.life;
        if (!this.cells[i][j].vu && this.vu){
          fill(100);
          noStroke();
          rect(this.cells[i][j].x+3, this.cells[i][j].y+3, this.cells[i][j].w-6, this.cells[i][j].w-6);
        }else{
          this.cells[i][j].show();
          if(!this.cells[i][j].vu){
            fill('rgba(0,0,0, 0.25)');
            rect(this.cells[i][j].x, this.cells[i][j].y, this.cells[i][j].w, this.cells[i][j].w);
          }
        }
        if(this.cells[i][j].b){
          fill("green");
          rect(this.cells[i][j].x, this.cells[i][j].y, this.cells[i][j].w, this.cells[i][j].w);
        }
        this.cells[i][j].hover();
      }
    }
    //translate(-this.x, -this.y);
  };

  this.flipall = function(){
    this.vu = !this.vu;
  }

}
