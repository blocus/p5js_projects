function sign(x){
  if (x < 0){
    return -1;
  }else{
    return 1;
  }
}

function Perceptron(){
  this.weight = new Array(2);

  for(let i = 0; i < this.weight.length; i++){
    this.weight[i] = random (-1, 1);
  }


  this.guess = function(inputs){
    sum = 0;
    for(let i = 0; i < this.weight.length; i++){
      sum += this.weight[i] * inputs[i] * inputs[i];
    }
    return sign(sum);
  }

  this.train = function(p){
    for(let i = 0; i < p.length; i++){
      error = p[i].label - this.guess(p[i].inputs);
      //console.log(error);
      if (error == 0){
        p[i].correct = true;
      }else{
        p[i].correct = false;
      }
      for(let j = 0; j < this.weight.length; j++){
        this.weight[j] += error * p[i].inputs[j];
      }
    }
    console.log(this.weight[0],  this.weight[1]);
  }

}
