function arr(x) {
  i = 0;
  y = []
  while (i < x.length) {
    if(x[i]>=0){
        y.push(x[i])
    }
    i++;
  }
  return y;
}

console.log(arr([0,2,-3,4, -5, -5, -9]))