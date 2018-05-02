let state;
let g;
let w;
let diff;
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  w = min(width, height);
  diff = 10;
  g = new Grid();

}

function draw(){
  background(51);
  g.show();
  if(g.win){
    fill('rgba(0,0,0, 0.25)');
    rect(0, 0,g.w, g.w);
    textSize(128);
    fill('green');
    text("You Win", 0+ 120, 0 + g.w/2 + 18);
  }else if(!g.life){
    fill('rgba(0,0,0, 0.25)');
    rect(0, 0, g.w, g.w);
    textSize(128);
    fill('red');
    text("Game Over", 0+ 30, 0 + g.w/2 + 18);
  }
}
function liberer(grid, x, y){
  for (let i = x-1; i < x+2; i++){
    if ((i < 0)|| (i > grid.length - 1)){
      continue;
    }
    for (let j = y-1; j < y+2; j++){
      if ((j < 0)|| (j > grid[i].length - 1)){
        continue;
      }
      if ((i == x) && (j == y)){
        grid[i][j].flip();
        g.notmine --;
      }
      if (grid[i][j].value != -1){
        if (grid[i][j].vu == false){
          if (grid[i][j].value == 0){
            liberer(grid, i, j);

          }
          grid[i][j].flip();
          g.notmine --;
        }
      }
    }
  }
  return sum;
}

function mousePressed() {
  for(let i = 0; i < diff; i++){
    for(let j = 0; j < diff; j++){
      if(g.cells[i][j].hover()){ // if mouse over cell
        if (mouseButton === LEFT) { // if mouse button is let
          if (!g.cells[i][j].b){
            if(!g.cells[i][j].vu){ // if cell is not opened
              if(g.cells[i][j].value == 0){
                liberer(g.cells, i, j);
                g.notmine --;
              }
              if(g.cells[i][j].value == -1){
                for(let i1 = 0; i1 < diff; i1++){
                  for(let j1 = 0; j1 < diff; j1++){
                    if (g.cells[i1][j1].value == -1){
                      g.cells[i1][j1].flip();
                      console.log('flip');
                    }
                  }
                }
                g.life = false;
                g.cells[i][j].explosed = true;
              }
              else{
                g.cells[i][j].flip();
                g.notmine --;
                // win
                if (g.notmine == 0){
                  g.win = true;
                  for(let i1 = 0; i1 < diff; i1++){
                    for(let j1 = 0; j1 < diff; j1++){
                      g.cells[i1][j1].win = true;
                    }
                  }
                }
              }
            }
          }
        }
        if (mouseButton === RIGHT) {
          g.cells[i][j].block();
        }
      }
    }
  }
}
