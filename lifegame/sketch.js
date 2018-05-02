
function make2DArray(r, c, mode){
  let arr = new Array(r);
  for (let i = 0; i < r; i++){
    arr[i] = new Array(c);
    if (mode == 0){
      for (let j = 0; j < c; j++){
        arr[i][j] = floor(random()+0.5);
      }
    }
  }
  return arr;
}

function get_voi(x, y){
  let sum = 0;
  for (let i = x-1; i < x+2; i++){
    for (let j = y-1; j < y+2; j++){
      if ((i < 0)|| (i > rows_max - 1)){
        continue;
      }
      if ((j < 0)|| (j > cols_max - 1)){
        continue;
      }
      if ((i == x) && (j == y)){
        continue;
      }
      sum += grid[i][j];
    }
  }
  return sum;
}

function update(){
  grid_tmp = make2DArray(rows_max, cols_max, 1);
  for (let i_u = 0; i_u < rows_max; i_u++){
    for (let j_u = 0; j_u < cols_max; j_u++){
      c = get_voi(i_u, j_u);
      if(grid[i_u][j_u] == 0){
        if(c == 3){
          grid_tmp[i_u][j_u] = 1
        }else{
          grid_tmp[i_u][j_u] = 0
        }
      }else{
        if ((c == 2)||(c == 3)){
          grid_tmp[i_u][j_u] = 1
        }else{
          grid_tmp[i_u][j_u] = 0
        }
      }
    }
  }
  //console.log(rows_max, cols_max, grid_tmp);
  grid = grid_tmp;
}

/*
function mouseWheel(event) {
  w += (event.delta / 100);
  if (w > wmax){
    w = wmax;
  }
  if(w < wmin){
    w = wmin;
  }

  posX = floor(mouseY/w);
  posY = floor(mouseX/w);

  rows = floor(height/w);
  cols = floor(width/w);
  startx = floor(posX - rows/2);
  starty = floor(posY - cols/2);
  console.log(w, "||", rows_max, rows, posX, startx, startx+ rows, "||", cols_max, cols, posY, starty, starty + cols);
  if (startx + rows > rows_max){
    startx = rows_max - rows;
  }
  if (starty +cols > cols_max){
    starty = cols_max - cols;
  }
  if (startx < 0){
    startx = 0;
  }
  if (starty < 0){
    starty = 0;
  }
  //console.log(w, "||", rows_max, rows, posX, startx, "||", cols_max, cols, posY, starty);
  console.log(w, "||", rows_max, rows, posX, startx, startx+ rows, "||", cols_max, cols, posY, starty, starty + cols);
  //console.log(posX, startx, , "||", posY, starty, cols);
}

*/
function show(){
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      ival = i + startx;
      jval = j + starty;
      if (ival > rows_max){
        ival = rows_max;
      }
      if (jval > cols_max){
        jval = cols_max;
      }
      if (ival < 0){
        ival = 0;
      }
      if (jval < 0){
        jval = 0;
      }
//      console.log(ival, jval);
      if (grid[ival][jval] == 1){
        noStroke();
        rect(j*w, i*w, w, w);
        fill(255);
      }
    }
  }
}

//let w = 5;
let i_show;
let j_show;
let grid;
let rows;
let cols;
let startx;
let starty;
function setup(){
  wmin = 3;
  wmax = 20;
  w = wmin;
  createCanvas(window.innerWidth, window.innerHeight);
  rows_max = floor(height/wmin);
  cols_max = floor(width/wmin);
  rows = rows_max;
  cols = cols_max;
  grid = make2DArray(rows, cols, 0);
  posX = floor(rows/2);
  posY = floor(cols/2);
  startx = floor(posX - rows/2);
  starty = floor(posY - cols/2);
  //console.log(w, "||", rows_max, rows, posX, "||", cols_max, cols, posY);
}




function draw(){
  background(0);
  // middle lines
  /*
  stroke("red");
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  */
  update();
  show();

  //save(iter.toString()+'.jpg');

}






























// EOF
