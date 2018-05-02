function grid(c, r){
  let arr = new Array(c);
  for(var i = 0; i < c; i++){
    arr[i] = new Array(r);
    for(var j = 0; j < c; j++){
      if(random() > .5){
        arr[i][j] = 1;
      }else{
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

grid.show = function(){

}
