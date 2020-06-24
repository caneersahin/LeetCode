var mySqrt = function(x) {
    
  if (x < 2) return x;
  var sol = 1;
  var sağ = x;
  var orta = 0;
  while (sol <= sağ) {
      orta = sol + Math.floor((sağ - sol) / 2);
    if (orta > x / orta) {
      sağ = orta - 1;
    } else if ((orta + 1) > x / (orta + 1)) {
      return orta;
    } else {
      sol = orta + 1;
    }
  }
};
