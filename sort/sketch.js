
var cmp = 0;
var swp= 0;
var start_time;
var colors = [[0xff0000, 1, 1], [0xff00ff, 0x10000, -1], [0x0000ff, 0x100, 1], [0x00ffff, 1, -1],[0x00ff00, 0x10000, 1], [0xffff00, 0x100, -1],[0xff0000, 1, 1]];
function getColor(i, a){
  var prop = (i*6)/(a-1);
  var deb = floor(prop);
  prop -= deb;
  sc = floor(colors[deb][2] * prop * 0xff)*colors[deb][1];
  c = colors[deb][0] + sc;
  r = (c & 0xff0000)/ 0x10000
  g = (c & 0xff00) / 0x100
  b = c & 0xff
  return [r, g, b];
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
    continue;
   }
}

function makeRandomArray(n){
  var arr = [];
  var choices = [];
  for (i=0; i<n; i++){
    choices.push(i);
  }
  var p = 0;
  while (choices.length > 0) {
    var x = choose(choices);
    arr.push(new cell(x, getColor(x, n), width / n));
    index = choices.indexOf(x);
    choices.splice(index, 1);
    p ++;
  }
  return arr;
}

function update(){
  for(var i = 0; i < tab.length; i++){
    tab[i].show(i);
  }
}

var tab;
var iter;
function setup(){
  n = 6*128;
  iter = 1;
  width = window.innerWidth;
  height = window.innerHeight- 200;
  createCanvas(width, height);
  tab = makeRandomArray(n);
  console.log(tab);

}

function swap(i, j){
  tmp = tab[i];
  tab[i] = tab[i+1];
  tab[i+1] = tmp;
  swp++;
  document.getElementById("swap").innerHTML = swp;
}

function bbl(iter){
  document.getElementById("title").innerHTML = "Bubble sort :";
  t = true;
  for(var i = 0; i < tab.length-iter; i++){
    //sleep(1);
    cmp++;
    document.getElementById("comp").innerHTML = cmp;
    if (tab[i].v > tab[i+1].v){
      swap(i, i+1);
      t = false;
    }
  }
  update();
  return t;
}

function insertion(i){
  document.getElementById("title").innerHTML = "Insertion sort";
  var j = i;
  while ((j > 0) && (tab[j-1].v > tab[j].v)){
    cmp++;
    document.getElementById("comp").innerHTML = cmp;
    swap(j-1, j);
    j--;
  }
  cmp++;
  document.getElementById("comp").innerHTML = cmp;

}

function selection(i){
  document.getElementById("title").innerHTML = "Selection sort";
  var j_min = i;
  for(j=i+1; j<tab.length; j++){
    cmp++;
    document.getElementById("comp").innerHTML = cmp;
    if(tab[j].v < tab[j_min].v){
      j_min = j;
    }
  }
  tmp = tab[i];
  tab[i] = tab[j_min];
  tab[j_min] = tmp;
  swp++;
  document.getElementById("swap").innerHTML = swp;
}

start_time = new Date().getTime();
algo = 0 ;
function draw(){
  if (iter < tab.length){
    if(algo == 0){
      bbl(iter);
    }
    if(algo == 1){
      selection(iter-1);
    }
    if(algo == 2){
      insertion(iter);
    }
    update();
    iter++ ;
  }
  else{
    iter = 1;
    tab = makeRandomArray(n);
    algo++;
    sleep(1000);
    start_time = new Date().getTime();
    cmp = 0;
    swp = 0;
    if(algo > 2){
      algo = 0;
    }
  }
  t = new Date().getTime() - start_time;
  cour_time = new Array(4);
  cour_time[0] = floor((t%1000)/10).toString();
  t = floor((t-cour_time[0])/1000);
  cour_time[1] = (t%60).toString();
  t = floor((t - cour_time[1])/60);
  cour_time[2] = (t%60).toString();
  t = floor((t - cour_time[2])/60);
  cour_time[3] = t.toString();
  formattedTime = cour_time[3]+":"+cour_time[2]+":"+cour_time[1]+"."+cour_time[0];
  //console.log(min, sec, t);
  document.getElementById("time").innerHTML = formattedTime;
}






























// EOF
