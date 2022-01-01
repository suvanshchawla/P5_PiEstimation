let data;

function preload(){
  data = loadStrings('milliondigits.txt');
}

function setup() {
  createCanvas(400, 400);
  let digits = data[0];
  let randoms = [];
  
  //console.log(data);
  let dataString = JSON.stringify(data);
  
  randoms = dataString.split(/\s+/);
  
  // while (digits.length > 0){
  //   let num = digits.slice(0, 5);
  //   digits = digits.slice(5);
  //   randoms.push(num);
  // }
  
  console.log(randoms.length);
  //console.log(randoms);
  
  //console.log(gcd(10, 93));
  //console.log(gcd(95, 10));
}

function gcd(a, b){
  if(b > a){
    [a, b] = [b, a];
  }
  
  let r = a % b;
  if (r == 0){
    return b;
    
  } else{
    return gcd(b, r);
  }
  
}